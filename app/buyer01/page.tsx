import { redirect } from "next/navigation";

// Redirect /buyer01/ to the old Netlify-hosted page temporarily
// This ensures the URL works during DNS migration
export default function Buyer01Page() {
  redirect("https://t-family-buyer.netlify.app/");
}
