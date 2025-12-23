import { DarkModeProvider } from "@/context/DarkModeProvider";
import "./globals.css";
import { Roboto, Montserrat } from "next/font/google";
import { AuthProvider } from "@/context/AuthProvider";
import { ToastContainer } from "react-toastify";

export const bodyFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "PayLink",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <DarkModeProvider>
        <head>
          <style>
            {`
              h1, h2, h3, h4, h5, h6 {
                            font-family: ${headingFont.style.fontFamily}, sans-serif;
                        }
                    `}
          </style>
        </head>
        <body className={`${bodyFont.className} bg-body  antialiased`}>
           <AuthProvider>
          {children}
           <ToastContainer />
           </AuthProvider>
        </body>
      </DarkModeProvider>
    </html>
  );
}
