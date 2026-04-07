"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import Image from "next/image";

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

export default function LiveSellerForm() {
  const t = useTranslations("form");
  const tLive = useTranslations("live");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

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
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="relative bg-dark py-20 px-6 text-center overflow-hidden">
        <Image
          src="/images/live-scene.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
            {tLive("label")}
          </h1>
          <p className="text-offwhite/60 text-sm max-w-xl mx-auto">
            {tLive("subcopy")}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-cream py-24 px-6">
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

            <div>
              <label className={labelClass}>{t("contact_id")}</label>
              <input
                type="text"
                className={inputClass}
                {...register("contact_id", { required: true })}
              />
            </div>

            <div>
              <label className={labelClass}>{t("sns_url")}</label>
              <input
                type="text"
                className={inputClass}
                placeholder={t("sns_placeholder")}
                {...register("sns_url")}
              />
            </div>

            <div>
              <label className={labelClass}>{t("followers")}</label>
              <input
                type="text"
                className={inputClass}
                {...register("followers")}
              />
            </div>

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

            <div>
              <label className={labelClass}>{t("message")}</label>
              <textarea
                rows={4}
                className={inputClass}
                placeholder={t("message_placeholder")}
                {...register("message")}
              />
            </div>

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
    </div>
  );
}
