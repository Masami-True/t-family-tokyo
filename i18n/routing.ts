import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ja", "zh", "ko", "es", "fr"],
  defaultLocale: "en",
});
