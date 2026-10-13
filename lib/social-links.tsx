// SNS・口コミサイトへのリンク（サイト共通フッターと /ja/opening で共用）
export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/tfamily.inc.japan/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <defs>
          <linearGradient id="ig-g" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="30%" stopColor="#FD5949" />
            <stop offset="65%" stopColor="#D6249F" />
            <stop offset="100%" stopColor="#285AEB" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-g)" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="url(#ig-g)" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-g)" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61576088344723",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#1877F2" d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/YLKX2G23XTTKM1",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path fill="#25D366" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@T-Family-727",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path fill="white" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/NextStory7",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="white" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Whatnot",
    href: "https://www.whatnot.com/ja-JP/user/tfamilyjapan",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path
          fill="#FFD600"
          d="M4.5 2C2 2 0.5 4.5 1.5 7L6.5 19.5C7 21 8.5 22 10 21.5L12 16L14 21.5C15.5 22 17 21 17.5 19.5L22.5 7C23.5 4.5 22 2 19.5 2C17 2 14.5 5 12 8.5C9.5 5 7 2 4.5 2Z"
        />
      </svg>
    ),
  },
  {
    name: "Google Review",
    href: "https://g.page/r/CT5WXUVxa3XmEAE/review",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "TripAdvisor",
    href: "https://www.tripadvisor.jp/Attraction_Review-g1066444-d34714545-Reviews-T_Vintage-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html",
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/images/tripadvisor-logo.png" alt="TripAdvisor" width={20} height={20} className="w-5 h-5 object-contain" />
    ),
  },
];

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Shop", href: "https://t-secondhands.jp/", external: true },
  { label: "Live Commerce", href: "/#live-seller" },
  { label: "Store", href: "/#store" },
];
