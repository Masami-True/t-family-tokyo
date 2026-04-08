"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations("contact");
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
    }
  };

  const inputClass =
    "w-full border border-border bg-offwhite px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded";
  const labelClass = "text-xs tracking-[0.15em] text-subtext mb-2 block";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="fade-in-section bg-cream py-24 px-6"
    >
      <p className="text-xs tracking-[0.2em] text-gold text-center mb-4">
        {t("label")}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl text-center text-text mb-12">
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
          <div>
            <label className={labelClass}>{t("name")}</label>
            <input
              type="text"
              className={inputClass}
              {...register("name", { required: true })}
            />
          </div>

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

          <div>
            <label className={labelClass}>{t("subject")}</label>
            <select
              className={inputClass}
              {...register("subject", { required: true })}
            >
              <option value="">—</option>
              <option value="purchase">{t("subject_purchase")}</option>
              <option value="wholesale">{t("subject_wholesale")}</option>
              <option value="live_seller">{t("subject_live")}</option>
              <option value="other">{t("subject_other")}</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>{t("message")}</label>
            <textarea
              rows={5}
              className={inputClass}
              placeholder={t("message_placeholder")}
              {...register("message", { required: true })}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-offwhite py-4 text-sm tracking-[0.2em] hover:bg-gold-dark transition-colors disabled:opacity-50 rounded"
          >
            {t("submit")}
          </button>
        </form>
      )}
    </section>
  );
}
