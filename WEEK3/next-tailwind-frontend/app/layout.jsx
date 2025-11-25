import "./globals.css";

import LayoutClient from "./clientlayout";

export const metadata = {
  title: "Week 3 Mini Capstone Project",
  description: "This is my first Next.js project with tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
