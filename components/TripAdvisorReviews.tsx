"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const TA_PAGE_URL =
  "https://www.tripadvisor.jp/Attraction_Review-g1066444-d34714545-Reviews-T_Vintage_GINZA-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html";

const AVATAR_COLORS = [
  "bg-teal-500", "bg-green-600", "bg-pink-500", "bg-purple-500",
  "bg-emerald-500", "bg-cyan-500", "bg-orange-500", "bg-blue-500",
  "bg-indigo-500", "bg-rose-500", "bg-yellow-600", "bg-green-500",
];

function nameToColor(name: string): string {
  const code = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return AVATAR_COLORS[code % AVATAR_COLORS.length];
}

// Static reviews — fallback / seed (newest first)
const staticReviews = [
  {
    name: "Dreamer55594559518",
    rating: 5,
    date: "2026年11月",
    text: "銀座で素敵なヴィンテージブランドショップを探している方に、ぜひおすすめしたいお店です✨ 店内には魅力的なバッグや小物がたくさん並んでいて、見ているだけでもワクワクします。スタッフの方も親切で、商品の状態や魅力を丁寧に説明してくださるので、安心してお買い物ができました。また銀座に来た際には、ぜひ立ち寄りたいと思います♡",
    initial: "D",
    color: "bg-teal-500",
  },
  {
    name: "Sightseer53675360807",
    rating: 5,
    date: "2026年10月",
    text: "スタッフの方の対応がとてもよかったです！ ありがとうございました 安心して買い物できます！",
    initial: "S",
    color: "bg-green-600",
  },
  {
    name: "明音",
    rating: 5,
    date: "2026年10月",
    text: "初めて伺いましたが、品揃えも豊富でどの商品も状態がすごく良かったです！ とても中古品とは思えないくらい綺麗で値段が他よりも安くて即決してしました。店員さんも皆さん愛想が良くてまた行きたいです！ ありがとうございました♡",
    initial: "明",
    color: "bg-pink-500",
  },
  {
    name: "yuki",
    rating: 5,
    date: "2026年10月",
    text: "最近新しくオープンした銀座のT-vintageさん、友人に勧められ遊びに行きました。品揃えが豊富で魅力的なバックがたくさんあり見ているだけでも楽しい空間でした。CHANELのフラップバックに心惹かれて購入いたしました。スタッフの方もとても親切で丁寧に対応してくださり、安心して気持ちよくお買い物ができました。また買い物に伺いたいと思います♡",
    initial: "y",
    color: "bg-purple-500",
  },
  {
    name: "Meander32456451916",
    rating: 5,
    date: "2026年10月",
    text: "品物もよく価格も安かったです いつもここで買いにきます！ 定員や社長もとても親切です",
    initial: "M",
    color: "bg-emerald-500",
  },
  {
    name: "NorthStar66245122997",
    rating: 5,
    date: "2026年10月",
    text: "銀座に新しくオープンしたヴィンテージショップ✨ 店内は清潔感があっておしゃれな雰囲気で、落ち着いてお買い物ができそうです。ハイブランドのヴィンテージアイテムが並んでいて、ヴィンテージ好きにはたまらないお店だと思います！銀座でブランドバッグやヴィンテージアイテムを探している方におすすめです♡",
    initial: "N",
    color: "bg-cyan-500",
  },
  {
    name: "高橋",
    rating: 5,
    date: "2026年10月",
    text: "銀座で色々お店を見て回って、こちらでヴィトンのエピのバッグ（ツイスト）を購入しました。中古とは思えないくらい状態が良くてびっくりしました。スタッフさんがバッグの状態やケアの方法を一つひとつ丁寧に教えてくださり、こちらのペースでゆっくり選ばせてくれたのが本当に嬉しかったです。状態が良いものをお得に買えて大満足です。",
    initial: "高",
    color: "bg-orange-500",
  },
  {
    name: "せーや",
    rating: 5,
    date: "2026年10月",
    text: "名古屋から東京に遊びに来ていて銀座を歩いていると中古ブランドショップがあり、ちょうど彼女が11月に誕生日だったのでバックの状態もよく、なにより店員さんの対応がよく僕がプレゼントを迷っていて、店員さんに聞いたところ、いろいろなブランドバックを出して見せてくれました‼️",
    initial: "せ",
    color: "bg-blue-500",
  },
  {
    name: "翔馬 若",
    rating: 5,
    date: "2026年10月",
    text: "10月中旬に友人と銀座を歩いていたところ、ニューオープンの店舗があり立ち寄りました。商品の状態も素晴らしく価格帯も手頃なためその場でヴィトンのバッグを即決させていただきました😆 外観も綺麗で立ち寄りやすいと思います！",
    initial: "翔",
    color: "bg-indigo-500",
  },
  {
    name: "優河 若",
    rating: 5,
    date: "2026年10月",
    text: "東銀座で散歩していたところ中古ブランドショップは新店舗オープンというところでフラット立ち寄ってみました。商品の状態も良く、彼女のプレゼントとして購入しました。とても良かったです。また来店したいと思います！！",
    initial: "優",
    color: "bg-rose-500",
  },
  {
    name: "x x",
    rating: 5,
    date: "2026年10月",
    text: "新店舗、東銀座にある素敵で明るいお店、品数多し！みるのが楽しい",
    initial: "x",
    color: "bg-yellow-600",
  },
];

type Review = (typeof staticReviews)[0];

function TaBubbles({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-2">
      {[...Array(count)].map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="w-3 h-3">
          <circle cx="6" cy="6" r="5" fill="#00AA6C" />
        </svg>
      ))}
    </div>
  );
}

function TaReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[260px] sm:w-[280px] bg-white rounded-lg border border-border p-5 shrink-0">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-9 h-9 rounded-full ${review.color} flex items-center justify-center text-white text-sm font-medium shrink-0`}
        >
          {review.initial}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-text leading-tight truncate">
            {review.name}
          </p>
          <p className="text-xs text-subtext">{review.date}</p>
        </div>
      </div>
      <TaBubbles count={review.rating} />
      <p className="text-sm text-text leading-relaxed line-clamp-4">
        {review.text}
      </p>
    </div>
  );
}

function TaOwl() {
  return (
    <svg viewBox="0 0 60 60" className="w-8 h-8 inline-block mr-2 align-middle">
      <ellipse cx="30" cy="34" rx="22" ry="20" fill="#34E0A1" />
      <circle cx="21" cy="28" r="9" fill="white" />
      <circle cx="39" cy="28" r="9" fill="white" />
      <circle cx="21" cy="28" r="6" fill="#00AA6C" />
      <circle cx="39" cy="28" r="6" fill="#00AA6C" />
      <circle cx="21" cy="28" r="3" fill="white" />
      <circle cx="39" cy="28" r="3" fill="white" />
      <ellipse cx="30" cy="42" rx="6" ry="4" fill="#00AA6C" />
      <path d="M18 16 Q14 10 20 8 Q24 14 21 18Z" fill="#34E0A1" />
      <path d="M42 16 Q46 10 40 8 Q36 14 39 18Z" fill="#34E0A1" />
    </svg>
  );
}

export default function TripAdvisorReviews() {
  const t = useTranslations("reviews");
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const [displayReviews, setDisplayReviews] = useState<Review[]>(staticReviews);

  // Fetch live reviews from /api/ta-reviews
  useEffect(() => {
    fetch("/api/ta-reviews")
      .then((r) => r.json())
      .then(
        (data: {
          reviews: { name: string; rating: number; date: string; text: string }[] | null;
        }) => {
          if (!data.reviews || data.reviews.length === 0) return;

          const apiReviews: Review[] = data.reviews.map((r) => ({
            name: r.name,
            rating: r.rating,
            date: r.date,
            text: r.text,
            initial: r.name.charAt(0).toUpperCase() || "?",
            color: nameToColor(r.name),
          }));

          // Prepend API reviews (newest), deduplicate against static by name
          const apiNames = new Set(apiReviews.map((r) => r.name));
          const filteredStatic = staticReviews.filter(
            (r) => !apiNames.has(r.name)
          );
          setDisplayReviews([...apiReviews, ...filteredStatic]);

          if (scrollRef.current) scrollRef.current.scrollLeft = 0;
        }
      )
      .catch(() => {});
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
  }, [displayReviews]);

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
    <section ref={sectionRef} className="fade-in-section bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8">
          <TaOwl />
          <span className="font-medium text-[#00AA6C]">Tripadvisor</span>
          <span className="font-heading text-text ml-2">
            {t("ta_headline_suffix")}
          </span>
        </h2>

        <div className="overflow-hidden" ref={scrollRef}>
          <div className="flex gap-4 w-max">
            {[...displayReviews, ...displayReviews].map((review, i) => (
              <TaReviewCard key={i} review={review} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href={TA_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#00AA6C] text-[#00AA6C] px-6 py-2.5 rounded text-sm font-medium hover:bg-[#00AA6C] hover:text-white transition-colors"
          >
            {t("ta_all_reviews")}
          </a>
        </div>
      </div>
    </section>
  );
}
