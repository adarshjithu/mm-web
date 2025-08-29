'use client'
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Provider, useSelector } from "react-redux";
import { store } from "@/features/store";
import { useRouter } from "next/navigation";
import { AuthWrapper } from "./component/auth/AuthWrapper";
import { Toaster } from "react-hot-toast";

// Import Poppins (sans-serif)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // add weights you’ll use
  variable: "--font-sans",
  display: "swap",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
           <Toaster position="top-center" reverseOrder={false} />
          <AuthWrapper>

          {children}
          </AuthWrapper>
        </Provider>
      </body>
    </html>
  );
}

