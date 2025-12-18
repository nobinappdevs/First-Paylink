import { DarkModeProvider } from "@/context/DarkModeProvider";
import "./globals.css";

export const metadata = {
  title: "PayLink",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`bg-body antialiased`}>
        <DarkModeProvider>
        {children}
        </DarkModeProvider>
        </body>
    </html>
  );
}
