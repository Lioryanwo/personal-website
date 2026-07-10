import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { profile, site } from "../content/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Lior Yanwo — third-year Computer Science student at HIT building intelligent systems: AI security research, reinforcement learning, computer vision, and full-stack development.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lior Yanwo — CS Student & AI Engineer",
    template: "%s · Lior Yanwo",
  },
  description,
  openGraph: {
    title: "Lior Yanwo — CS Student & AI Engineer",
    description,
    url: "/",
    siteName: "Lior Yanwo",
    type: "website",
    images: [{ url: "/images/profile.jpg", width: 1170, height: 2068, alt: "Lior Yanwo" }],
  },
  twitter: {
    card: "summary",
    title: "Lior Yanwo — CS Student & AI Engineer",
    description,
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: site.url,
    image: `${site.url}/images/profile.jpg`,
    jobTitle: "Computer Science Student",
    affiliation: {
      "@type": "EducationalOrganization",
      name: "Holon Institute of Technology",
    },
    sameAs: [
      "https://github.com/Lioryanwo",
      "https://www.linkedin.com/in/lior-yanwo-0537b6345/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lior Yanwo",
    url: site.url,
    publisher: { "@type": "Person", name: profile.name },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteJsonLd, personJsonLd]),
          }}
        />
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
