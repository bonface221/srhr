import { BASE_URL as url } from "@/config";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader color="var(--chakra-colors-brand-green)" />
        <Providers>
          <Navbar />
          <Box as="main" bg="rgba(33, 115, 41, 0.08)">
            {children} <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "SRHR Alliance",
  description: `The SRHR Alliance provides a platform for National, Regional, and International advocacy to influence the SRHR agenda, offering leverage on resources and expertise for better programming and fundraising. Working as an Alliance enhances the voice and influence in advocacy and fundraising, adding value to individual organizations by complementing their strengths and weaknesses. This partnership enables member organizations to share strategies, align objectives, and resources, achieving more together than individually. The Alliance has a strong domestic track record in SRHR areas, HIV prevention, and harm reduction, and interfaces with programs on WASH, nutrition, gender, governance, and financing.`,
  openGraph: {
    title: "SRHR Alliance",
    description: `The SRHR Alliance provides a platform for National, Regional, and International advocacy to influence the SRHR agenda, offering leverage on resources and expertise for better programming and fundraising. Working as an Alliance enhances the voice and influence in advocacy and fundraising, adding value to individual organizations by complementing their strengths and weaknesses. This partnership enables member organizations to share strategies, align objectives, and resources, achieving more together than individually. The Alliance has a strong domestic track record in SRHR areas, HIV prevention, and harm reduction, and interfaces with programs on WASH, nutrition, gender, governance, and financing.`,
    url: url,
  },
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "SRHR",
    "Alliance",
    "Advocacy",
    "Programming",
    "Fundraising",
    "HIV Prevention",
    "Harm Reduction",
    "WASH",
    "Nutrition",
    "Gender",
    "Governance",
    "Financing",
  ],
};
