"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GlobalStyles } from "./styles/Globals";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyles />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
