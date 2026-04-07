"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  contact_method: string;
  contact_id: string;
  sns_url: string;
  followers: string;
  experience: string;
  message: string;
}

export default function ApplyForm() {
  const t = useTranslations("form");
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: FormData) => {
    const endpoint = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "xtest"}`;
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
    }
  };

  const inputClass =
    "w-full border border-border bg-offwhite px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors";
  const labelClass = "text-xs tracking-[0.15em] text-subtext mb-2 block";

  return (
    <section
      id="apply"
      ref={sectionRef}
      className="fade-in-section bg-cream py-24 px-6"
    >
      {/* Label */}
      <p className="text-xs tracking-[0.2em] text-gold text-center mb-2">
        {t("label")}
      </p>

      {/* Headline */}
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">
        {t("headline")}
      </h2>

      {submitted ? (
        <div className="text-center text-gold font-heading text-xl py-12">
          {t("success")}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-6"
        >
          {/* Name */}
          <div>
            <label className={labelClass}>{t("name")}</label>
            <input
              type="text"
              className={inputClass}
              {...register("name", { required: true })}
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>{t("email")}</label>
            <input
              type="email"
              className={inputClass}
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
          </div>

          {/* Contact Method */}
          <div>
            <label className={labelClass}>{t("contact_method")}</label>
            <select
              className={inputClass}
              {...register("contact_method", { required: true })}
            >
              <option value="">—</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="LINE">LINE</option>
              <option value="WeChat">WeChat</option>
            </select>
          </div>

          {/* Account ID / Phone */}
          <div>
            <label className={labelClass}>{t("contact_id")}</label>
            <input
              type="text"
              className={inputClass}
              {...register("contact_id", { required: true })}
            />
          </div>

          {/* SNS Account URL */}
          <div>
            <label className={labelClass}>{t("sns_url")}</label>
            <input
              type="text"
              className={inputClass}
              placeholder={t("sns_placeholder")}
              {...register("sns_url")}
            />
          </div>

          {/* Followers */}
          <div>
            <label className={labelClass}>{t("followers")}</label>
            <input
              type="text"
              className={inputClass}
              {...register("followers")}
            />
          </div>

          {/* Live Streaming Experience */}
          <div>
            <label className={labelClass}>{t("experience")}</label>
            <select
              className={inputClass}
              {...register("experience", { required: true })}
            >
              <option value="">—</option>
              <option value="yes">{t("experience_yes")}</option>
              <option value="no">{t("experience_no")}</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className={labelClass}>{t("message")}</label>
            <textarea
              rows={4}
              className={inputClass}
              placeholder={t("message_placeholder")}
              {...register("message")}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-offwhite py-4 text-sm tracking-[0.2em] hover:bg-gold-dark transition-colors disabled:opacity-50"
          >
            {t("submit")}
          </button>
        </form>
      )}
    </section>
  );
}
