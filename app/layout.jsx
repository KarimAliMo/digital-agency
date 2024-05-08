import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";
import NavMenu from "@/components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Agency Website",
  description: "Created by Karim Mo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <NavMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
