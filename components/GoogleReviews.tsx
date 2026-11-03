"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Static reviews — fallback when Google Places API is not configured
// Kept sorted newest first; add new reviews at the TOP of this array
const staticReviews = [
  {
    name: "常チーノ",
    rating: 5,
    date: "6日前",
    text: "商品のラインナップが多く、お手頃な価格なのでまた行きたいです",
    initial: "チ",
    color: "bg-green-500",
  },
  {
    name: "Cherry Mae Hattori",
    rating: 5,
    date: "16日前",
    text: "I have been on this shop many times and I was quietly impressive for the prices. The prices are negotiable. The staff are very helpful to communicate. I highly recommended T-family Company",
    initial: "C",
    color: "bg-green-600",
  },
  {
    name: "トモエ",
    rating: 5,
    date: "1か月前",
    text: "商品も写真で欠点箇所をしっかり載せてくれて、商品が届いて箱を開いたら丁寧に包んで頂いてました。また機会があれば安心してお願いできるところだと思います。",
    initial: "ト",
    color: "bg-blue-500",
  },
  {
    name: "Josie Jenkins",
    rating: 5,
    date: "1か月前",
    text: "I purchased a Fendi bag and it was in excellent condition and the price was amazing. The bag was clean and packaged well with no odor. I've found my new vendor. Thank you so much.",
    initial: "J",
    color: "bg-purple-500",
  },
  {
    name: "Mary Rose Guevarra",
    rating: 5,
    date: "2か月前",
    text: "There's a wide variety of bags, but I really like Chanel and Hermes. The prices are reasonable and the quality is excellent.",
    initial: "M",
    color: "bg-pink-500",
  },
  {
    name: "edwardzon divina",
    rating: 5,
    date: "2か月前",
    text: "This bag from samurai attack is very affordable price! thank you always.",
    initial: "e",
    color: "bg-orange-500",
  },
  {
    name: "pingping GE",
    rating: 5,
    date: "4か月前",
    text: "这是一家很有特色的中古店 我在房屋附近闲逛，看到这家店，就直接进来了。买到了一直想要的包包，价格真的太划算了。",
    initial: "p",
    color: "bg-yellow-600",
  },
  {
    name: "オルベサロイレシャンテル",
    rating: 5,
    date: "4か月前",
    text: "家族ぐるみでお世話になっております。品質も良く満足しています。ライバーさんのライブも良く見させて頂いてます。値段も満足のいくものでした",
    initial: "オ",
    color: "bg-teal-500",
  },
  {
    name: "Nilda Hirai",
    rating: 5,
    date: "4か月前",
    text: "Ive been a live seller for 3 years at this shop. I can tell that the staff here are so accomodating and the big boss here(sacho) is one of a kind. He is so kind and very supportive.",
    initial: "N",
    color: "bg-indigo-500",
  },
  {
    name: "Sarah madel Orpesa",
    rating: 5,
    date: "4か月前",
    text: "I had an amazing experience shopping here! The selection of pre-loved luxury bags, shoes, and apparel is impressive— everything is carefully curated and in beautiful condition.",
    initial: "S",
    color: "bg-rose-500",
  },
  {
    name: "Zenbruks cad",
    rating: 5,
    date: "4か月前",
    text: "First time in Japan and a friend recommended this shop! 😍 I'm super picky when it comes to luxury shopping, but this store was amazing so patient and hands-on while I tried different bags.",
    initial: "Z",
    color: "bg-emerald-500",
  },
  {
    name: "Boyet Orpesa",
    rating: 5,
    date: "4か月前",
    text: "Wow what a nice place and the staff are very helpful, i found my bag with very reasonable price",
    initial: "B",
    color: "bg-cyan-500",
  },
];

type Review = (typeof staticReviews)[0] & { photoUri?: string };

const AVATAR_COLORS = [
  "bg-green-500", "bg-blue-500", "bg-purple-500", "bg-pink-500",
  "bg-orange-500", "bg-teal-500", "bg-indigo-500", "bg-rose-500",
  "bg-emerald-500", "bg-cyan-500", "bg-yellow-600", "bg-green-600",
];

function nameToColor(name: string): string {
  const code = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return AVATAR_COLORS[code % AVATAR_COLORS.length];
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[#FBBC05] text-sm mb-2">
      {[...Array(count)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[260px] sm:w-[280px] bg-white rounded-lg border border-border p-5 shrink-0">
      <div className="flex items-center gap-3 mb-3">
        {review.photoUri ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photoUri}
            alt={review.name}
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover shrink-0"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className={`w-9 h-9 rounded-full ${review.color} flex items-center justify-center text-white text-sm font-medium shrink-0`}
          >
            {review.initial}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-medium text-text leading-tight truncate">
            {review.name}
          </p>
          <p className="text-xs text-subtext">{review.date}</p>
        </div>
      </div>
      <Stars count={review.rating} />
      <p className="text-sm text-text leading-relaxed line-clamp-4">
        {review.text}
      </p>
    </div>
  );
}

export default function GoogleReviews() {
  const t = useTranslations("reviews");
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const [displayReviews, setDisplayReviews] = useState<Review[]>(staticReviews);

  // Fetch newest reviews from Google Places API
  useEffect(() => {
    fetch("/api/google-reviews")
      .then((r) => r.json())
      .then((data) => {
        if (!data.reviews || data.reviews.length === 0) return;

        const apiReviews: Review[] = data.reviews.map(
          (r: {
            authorAttribution: { displayName: string; photoUri?: string };
            rating: number;
            relativePublishTimeDescription: string;
            text?: { text: string };
            originalText?: { text: string };
          }) => {
            const name = r.authorAttribution.displayName;
            return {
              name,
              rating: r.rating,
              date: r.relativePublishTimeDescription,
              text: r.text?.text ?? r.originalText?.text ?? "",
              initial: name.charAt(0).toUpperCase(),
              color: nameToColor(name),
              photoUri: r.authorAttribution.photoUri,
            };
          }
        );

        // Prepend API reviews (newest), remove duplicates from static
        const apiNames = new Set(apiReviews.map((r) => r.name));
        const filteredStatic = staticReviews.filter(
          (r) => !apiNames.has(r.name)
        );
        setDisplayReviews([...apiReviews, ...filteredStatic]);

        // Reset carousel to show newest from the start
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
      })
      .catch(() => {}); // silently use static fallback
  }, []);

  // Continuous auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let scrollPos = 0;

    const step = () => {
      scrollPos += 0.5;
      if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
      el.scrollLeft = scrollPos;
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [displayReviews]); // restart when reviews update

  // Fade-in on scroll
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

  return (
    <section ref={sectionRef} className="fade-in-section bg-offwhite py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-center mb-8">
          <span className="font-medium">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          <span className="font-heading text-text ml-2">{t("headline_suffix")}</span>
        </h2>

        {/* Write review button */}
        <div className="text-center mb-8">
          <a
            href="https://g.page/r/CT5WXUVxa3XmEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4285F4] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#3367D6] transition-colors"
          >
            {t("write_review")}
          </a>
        </div>

        {/* Scrolling review cards */}
        <div className="overflow-hidden" ref={scrollRef}>
          <div className="flex gap-4 w-max">
            {[...displayReviews, ...displayReviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>

        {/* Review request */}
        <div className="mt-8 text-center">
          <p className="text-sm text-subtext">{t("review_request")}</p>
        </div>
      </div>
    </section>
  );
}
