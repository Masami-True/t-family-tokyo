import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkRateLimit, sanitize, isValidEmail, getClientIp } from "@/lib/security";

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await req.json();
    const { name, email, subject, message } = data;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Required fields missing" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // Sanitize
    const safe = {
      name: sanitize(name),
      email: sanitize(email),
      subject: sanitize(subject),
      message: sanitize(message),
    };

    const subjectLabels: Record<string, string> = {
      purchase: "商品購入について",
      wholesale: "卸売・業者取引について",
      live_seller: "ライブセラーについて",
      other: "その他",
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Notification to T-Family
    await transporter.sendMail({
      from: `"T-Family" <${process.env.SMTP_USER || "tominaga@t-family.tokyo"}>`,
      replyTo: safe.email,
      to: "info@t-family.tokyo",
      subject: `【お問い合わせ】${subjectLabels[safe.subject] || safe.subject} — ${safe.name} 様`,
      html: `
        <h2>ウェブサイトからのお問い合わせ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">お名前</td><td style="padding:8px;border:1px solid #ddd;">${safe.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">メール</td><td style="padding:8px;border:1px solid #ddd;">${safe.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">お問い合わせ種別</td><td style="padding:8px;border:1px solid #ddd;">${subjectLabels[safe.subject] || safe.subject}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">メッセージ</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-line;">${safe.message}</td></tr>
        </table>
      `,
    });

    // 2. Auto-reply to sender
    await transporter.sendMail({
      from: `"T-Family Inc." <${process.env.SMTP_USER || "tominaga@t-family.tokyo"}>`,
      replyTo: "info@t-family.tokyo",
      to: safe.email,
      subject: "【T-Family】お問い合わせありがとうございます",
      html: `
        <div style="max-width:600px;margin:0 auto;font-family:sans-serif;color:#1a1a1a;">
          <div style="text-align:center;padding:32px 0;border-bottom:1px solid #E0D9CC;">
            <h1 style="font-size:18px;color:#B8972A;letter-spacing:0.1em;">T-Family Inc.</h1>
          </div>
          <div style="padding:32px 24px;">
            <p style="margin-bottom:16px;">${safe.name} 様</p>
            <p style="margin-bottom:16px;">この度はT-Familyへお問い合わせいただき、誠にありがとうございます。</p>
            <p style="margin-bottom:16px;">ご連絡内容を確認の上、担当者より近日中にご返信いたします。</p>
            <p style="margin-bottom:24px;">今しばらくお待ちくださいませ。</p>
            <div style="background:#F5F0E8;padding:16px;border-radius:4px;margin-bottom:24px;">
              <p style="font-size:12px;color:#6B6B6B;margin-bottom:8px;">お問い合わせ内容：</p>
              <p style="font-size:13px;white-space:pre-line;">${safe.message}</p>
            </div>
            <hr style="border:none;border-top:1px solid #E0D9CC;margin:24px 0;" />
            <p style="font-size:12px;color:#6B6B6B;">
              T-Family株式会社<br/>
              東京都港区西新橋1丁目18-11 ル・グラシエルBLDG 15号館5F<br/>
              TEL: 03-6823-2699<br/>
              EMAIL: info@t-family.tokyo<br/>
              WEB: https://t-family.tokyo
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
