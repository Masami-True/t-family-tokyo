import type { ReactNode } from "react";

// /[locale]/opening の掲載文（日本語・英語）
// 「aside」は肩の力を抜いた“ひとこと”。不要になったら該当行を消すだけで外せる。

export type Lang = "ja" | "en";

type Copy = {
  htmlTitle: string;
  description: string;
  ogLocale: string;
  heroPhotoAlt: string;
  catchphrase: string;
  heroDatesSr: string;
  heroSpecialDay: string;
  langSwitchLabel: string;
  jumpNavLabel: string;
  jumpNav: { label: string; target: string; badge?: boolean }[];

  greetingLabel: string;
  greeting: ReactNode[];
  asideLabel: string;
  greetingAside: string;

  specialTag: string;
  specialDay: string;
  hoursBothDays: string;
  openingDays: ReactNode[];
  openingAsides: string[];

  flowersHeading: string;
  flowers: ReactNode[];
  flowersAside: string;

  reviewsHeading: string;
  reviews: ReactNode[];
  reviewsAside: string;
  reviewGoogle: string;
  reviewTripadvisor: string;

  storeHeading: string;
  storeRows: { label: string; value: ReactNode }[];
  mapTitle: string;
  storeAside: string;
  openMap: string;
  viewTripadvisor: string;

  calendarLabel: string;
  calendarEvent: ReactNode;
  calendarAside: string;
  addGoogleCalendar: string;
  addIcs: string;
  calendarDetails: string;
  icsHref: string;

  closing: ReactNode;
  closingAside: string;
  company: string;
  // 公式サイトのフッターと同じ並び（About / Shop / Live Commerce / Store は HP の navItems をそのまま使う）
  footerLabels: { top: string; company: string; tokusho: string; privacy: string };
};

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-medium text-[#6E5517]">{children}</strong>
);
const NoWrap = ({ children }: { children: ReactNode }) => (
  <span className="whitespace-nowrap">{children}</span>
);
const Brand = () => <span translate="no">T-Vintage</span>;

export const COPY: Record<Lang, Copy> = {
  ja: {
    htmlTitle: "T-Vintage GRAND OPEN 2026.10.24 | produced by T-Family",
    description:
      "2026年10月24日（土）11:00、銀座に「T-Vintage」（produced by T-Family）がオープンいたします。10月24日（土）・25日（日）はOPENING DAYS（25日（日）は特別営業日）。皆さまのお越しをお待ちしております。",
    ogLocale: "ja_JP",
    heroPhotoAlt: "T-Vintage 店舗外観",
    catchphrase: "時を越えて、価値を繋ぐ。",
    heroDatesSr: "2026年10月24日（土）・25日（日）",
    heroSpecialDay: "10/25（日）は特別営業日として営業いたします",
    langSwitchLabel: "言語",
    jumpNavLabel: "このページの内容",
    jumpNav: [
      { label: "日程", target: "sec-opening" },
      { label: "お花", target: "sec-flowers" },
      { label: "口コミ", target: "sec-reviews", badge: true },
      { label: "アクセス", target: "sec-store" },
    ],

    greetingLabel: "ご挨拶",
    greeting: [
      "平素より格別のお引き立てを賜り、心より御礼申し上げます。",
      <>
        このたび、銀座に新店舗「<Brand />」を2026年10月24日（土）11:00にオープンする運びとなりました。
        <br />
        厳選したヴィンテージ・ブランドアイテムを、銀座ならではの空間でゆっくりとご覧いただける店舗を目指してまいりました。
      </>,
    ],
    asideLabel: "ひとこと",
    greetingAside: "……と、かしこまったご挨拶はここまで。ここからは少しだけ肩の力を抜いてご案内いたします。",

    specialTag: "特別営業",
    specialDay: "10/25（日）は特別営業日として営業いたします",
    hoursBothDays: "営業時間 11:00 – 20:00（両日とも）",
    openingDays: [
      "オープンを記念し、10月24日（土）・25日（日）の2日間をOPENING DAYSとして、皆さまに新しいお店をご覧いただければと存じます。",
      "営業時間中であればお時間は問いませんので、お近くにお越しの際はお気軽にお立ち寄りください。スタッフが店内をご案内するとともに、ささやかではございますが、お飲み物と記念品をご用意してお待ちしております。",
      "新しいお店の門出を、ぜひ皆さまと一緒に盛り上げていただけましたら大変嬉しく存じます。",
    ],
    openingAsides: [
      "日曜日は本来お休みですが、この日ばかりはスタッフ全員はりきって出勤します。",
      "お飲み物は「なくなり次第終了」……とならないよう、多めにご用意しております。",
    ],

    flowersHeading: "お祝いのお花について",
    flowers: [
      "大変ありがたいことに、お祝いのお花についてお問い合わせをいただいております。",
      <>
        店内スペースの都合上、お花をお贈りいただける場合は、胡蝶蘭またはアレンジメントでお願いできますと幸いです。
        <br />
        お届けは
        <B>10月22日（木）～10月23日（金）迄</B>
        にお願い致します。
      </>,
      "もちろん、お心遣いはどうぞなさらず、手ぶらでお気軽にお越しください。",
    ],
    flowersAside: "手ぶらでお越しいただいても、店内はすでにヴィンテージで満開です。",

    reviewsHeading: "ひとつだけ、お願いがございます",
    reviews: [
      <>
        ご来店の際には、ぜひ<NoWrap>Googleマップ</NoWrap>並びに<NoWrap>トリップアドバイザー</NoWrap>の口コミへご協力をお願い致します。
      </>,
      <>
        代表の富永が、<B>何よりも一番大喜びします！！！</B>
      </>,
    ],
    reviewsAside: "★の数だけ、富永の笑顔が増えると言われています（社内調べ）。",
    reviewGoogle: "Googleマップで口コミを書く",
    reviewTripadvisor: "トリップアドバイザーで口コミを書く",

    storeHeading: "店舗のご案内",
    storeRows: [
      {
        label: "店名",
        value: (
          <span translate="no">
            T-Vintage
            <span className="ml-2 text-[13px] text-[#6B6B6B]">produced by T-Family</span>
          </span>
        ),
      },
      { label: "グランドオープン", value: "2026年10月24日（土）11:00" },
      {
        label: "営業時間",
        value: (
          <>
            11:00 – 20:00
            <br />
            <span className="text-[#6E5517]">※10/25（日）は特別営業日として営業いたします</span>
          </>
        ),
      },
      {
        label: "所在地",
        value: (
          <>
            〒104-0061
            <br />
            東京都中央区銀座3-12-17 <NoWrap>T-Familyビル</NoWrap>
          </>
        ),
      },
      {
        label: "アクセス",
        value: (
          <>
            東京メトロ「東銀座駅」徒歩3分
            <br />
            「銀座駅」徒歩5分
            <br />
            「銀座一丁目駅」徒歩7分
            <br />
            JR「有楽町駅」徒歩10分
          </>
        ),
      },
    ],
    mapTitle: "T-Vintage の地図",
    storeAside: "道に迷われたら、お気軽にお電話ください。全力で道案内いたします。",
    openMap: "Googleマップで開く",
    viewTripadvisor: "トリップアドバイザーで見る",

    calendarLabel: "カレンダーに追加",
    calendarEvent: (
      <>
        <Brand /> OPENING DAYS
        <br />
        10/24（土）11:00 〜 10/25（日）20:00
      </>
    ),
    calendarAside: "うっかり忘れ防止に、ぜひどうぞ。",
    addGoogleCalendar: "Googleカレンダーに追加",
    addIcs: "iPhoneなど（.ics）",
    calendarDetails:
      "T-Vintage（produced by T-Family）グランドオープン 2026年10月24日（土）11:00\nOPENING DAYS 10月24日（土）・25日（日）※25日（日）は特別営業日 営業時間 11:00 – 20:00",
    icsHref: "/files/t-vintage-ginza-opening-days.ics",

    closing: (
      <>
        皆さまのお越しを、スタッフ一同心よりお待ちしております。
        <br />
        今後ともどうぞよろしくお願い申し上げます。
      </>
    ),
    closingAside: "追伸　当日は富永が、入口でそわそわしながらお待ちしております。",
    company: "T-Family株式会社",
    footerLabels: { top: "公式サイト TOP", company: "会社概要", tokusho: "特定商取引法に基づく表記", privacy: "プライバシーポリシー" },
  },

  en: {
    htmlTitle: "T-Vintage GRAND OPEN 2026.10.24 | produced by T-Family",
    description:
      "T-Vintage, produced by T-Family, opens in Ginza, Tokyo on Saturday, October 24, 2026 at 11:00. Join us for our OPENING DAYS on October 24–25 — Sunday is a special business day.",
    ogLocale: "en_US",
    heroPhotoAlt: "T-Vintage storefront",
    catchphrase: "Beyond time, we carry value forward.",
    heroDatesSr: "Saturday, October 24 and Sunday, October 25, 2026",
    heroSpecialDay: "Open Sun 10/25 as a special business day",
    langSwitchLabel: "Language",
    jumpNavLabel: "On this page",
    jumpNav: [
      { label: "Dates", target: "sec-opening" },
      { label: "Flowers", target: "sec-flowers" },
      { label: "Reviews", target: "sec-reviews", badge: true },
      { label: "Access", target: "sec-store" },
    ],

    greetingLabel: "GREETING",
    greeting: [
      "Thank you, as always, for your continued support.",
      <>
        We are delighted to announce that our new store, <Brand />, will open in Ginza on Saturday, October 24, 2026 at 11:00.
        <br />
        We have created a space where you can take your time exploring carefully selected vintage and luxury brand items — in a setting only Ginza can offer.
      </>,
    ],
    asideLabel: "BY THE WAY",
    greetingAside: "…And that concludes the formal part. From here on, we'll loosen our ties a little.",

    specialTag: "SPECIAL",
    specialDay: "Sunday 10/25 is a special business day — we're open!",
    hoursBothDays: "Hours 11:00 – 20:00 (both days)",
    openingDays: [
      "To celebrate our opening, we are holding OPENING DAYS on Saturday, October 24 and Sunday, October 25.",
      "Please drop by any time during opening hours. Our staff will be happy to show you around, and we'll have drinks and a small commemorative gift waiting for you.",
      "We would be truly delighted if you could help us celebrate this new beginning.",
    ],
    openingAsides: [
      "We're usually closed on Sundays, but the whole team is coming in for this one.",
      "Drinks are not \"while supplies last.\" We've stocked up. Generously.",
    ],

    flowersHeading: "About Congratulatory Flowers",
    flowers: [
      "We are very grateful to have received inquiries about sending congratulatory flowers.",
      <>
        Due to limited space in the store, we kindly ask that any flowers be phalaenopsis orchids or arrangements.
        <br />
        Please have them delivered <B>between Thursday, October 22 and Friday, October 23</B>.
      </>,
      "Of course, there is no need to bring anything at all — please feel free to come empty-handed.",
    ],
    flowersAside: "Even if you come empty-handed, the store is already in full bloom — with vintage.",

    reviewsHeading: "Just One Small Favor",
    reviews: [
      "When you visit, we'd be grateful if you could leave us a review on Google Maps or Tripadvisor.",
      <>
        Our CEO, Tominaga, <B>will be the happiest person in the building!!!</B>
      </>,
    ],
    reviewsAside: "Studies show each star adds one more smile to Tominaga's face. (Source: us.)",
    reviewGoogle: "Write a review on Google Maps",
    reviewTripadvisor: "Write a review on Tripadvisor",

    storeHeading: "Store Information",
    storeRows: [
      {
        label: "Store",
        value: (
          <span translate="no">
            T-Vintage
            <span className="ml-2 text-[13px] text-[#6B6B6B]">produced by T-Family</span>
          </span>
        ),
      },
      { label: "Grand opening", value: "Saturday, October 24, 2026 at 11:00" },
      {
        label: "Hours",
        value: (
          <>
            11:00 – 20:00
            <br />
            <span className="text-[#6E5517]">*Open on Sun 10/25 as a special business day</span>
          </>
        ),
      },
      {
        label: "Address",
        value: (
          <>
            <NoWrap>T-Family Bldg.,</NoWrap> 3-12-17 Ginza,
            <br />
            Chuo-ku, Tokyo 104-0061, Japan
          </>
        ),
      },
      {
        label: "Access",
        value: (
          <>
            3 min walk from Higashi-ginza Sta. (Tokyo Metro)
            <br />
            5 min walk from Ginza Sta.
            <br />
            7 min walk from Ginza-itchome Sta.
            <br />
            10 min walk from Yurakucho Sta. (JR)
          </>
        ),
      },
    ],
    mapTitle: "Map to T-Vintage",
    storeAside: "Lost? Just give us a call — we'll guide you in, step by step.",
    openMap: "Open in Google Maps",
    viewTripadvisor: "View on Tripadvisor",

    calendarLabel: "ADD TO CALENDAR",
    calendarEvent: (
      <>
        <Brand /> OPENING DAYS
        <br />
        Sat 10/24 11:00 – Sun 10/25 20:00
      </>
    ),
    calendarAside: "So you don't accidentally forget. (We'd be sad.)",
    addGoogleCalendar: "Add to Google Calendar",
    addIcs: "iPhone & others (.ics)",
    calendarDetails:
      "T-Vintage (produced by T-Family) GRAND OPEN Sat, Oct 24, 2026 11:00\nOPENING DAYS Sat 10/24 & Sun 10/25 (Sunday is a special business day) Hours 11:00 – 20:00",
    icsHref: "/files/t-vintage-opening-days-en.ics",

    closing: (
      <>
        Our whole team looks forward to welcoming you.
        <br />
        Thank you for your continued support.
      </>
    ),
    closingAside: "P.S. Tominaga will be waiting at the door, looking a little restless.",
    company: "T-Family Inc.",
    footerLabels: { top: "Official Site", company: "Company", tokusho: "Legal Notice", privacy: "Privacy Policy" },
  },
};
