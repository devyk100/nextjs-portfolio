import type { Metadata } from "next";
import { Geist, Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const montserratSans = Montserrat({
	variable: "--font-montserrat-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Yash Ramesh Kumar | Juquox | devyk100 - Software Engineer",
	description:
		"I'm Yash (Juquox), Backend Developer. Competitive Programmer.I am a Software Engineer with the passion to write fast, scalable, and efficient code that works seamlessly.",
	keywords: [
		"Juquox",
		"devyk100",
		"Yash Ramesh Kumar",
		"Yash Kumar",
		"NIT Warangal",
		"National Institute of Technology, Warangal",
		"ECE VLSI",
		"Yash",
		"devyk100 developer",
		"Juquox Developer",
		"juquox developer",
		"Backend Developer",
		"Competitive Programmer",
		"Full Stack Engineer",
		"Android Developer",
		"Systems Architect",
		"Real-time Systems",
		"AI Tools Developer",
		"Prisma",
		"Next.js Developer",
		"TypeScript Developer",
		"Docker Dev",
		"Distributed Systems",
		"Real-time Infrastructure",
		"Yash Kumar Portfolio",
		"Yash Ramesh Kumar Portfolio",


		"Yash Juquox",
		"Yash devyk100",
		"Yash Developer",
		"Yash Fullstack",
		"Yash Backend",
		"Yash Programmer",
		"Yash Engineer",
		"Yash Architect",
		"Yash Android",
		"Yash TypeScript",
		"Yash Next.js",
		"Yash Docker",
		"Juquox Developer",
		"devyk100 Portfolio",
		"Juquox Portfolio",
		"ECE VLSI Engineer",
		"NIT Warangal ECE",
		"AI Developer",
		"VLSI Systems",
		"Next.js TypeScript",
		"Distributed Systems Developer",
		"Real-time Systems Engineer",
		"Full Stack Developer",
		"Backend Systems",
		"Portfolio Yash",
		"Yash Ramesh Portfolio",
		"National Institute Portfolio",



		"Yash Kumar Developer",
		"Yash Ramesh Programmer",
		"Yash Full Stack Engineer",
		"Yash Kumar Backend Developer",
		"Yash Android Developer",
		"Yash AI Tools Developer",
		"Juquox Backend Developer",
		"devyk100 AI Tools",
		"Next.js TypeScript Developer",
		"Distributed Real-time Systems",
		"Yash NIT Warangal",
		"ECE VLSI NIT",
		"Yash Kumar Fullstack",
		"Yash Kumar Real-time Systems",
		"Yash Developer Portfolio",

		"Juquox Technologies",
		"Juquox Systems",
		"Juquox Portfolio",
		"devyk100 Projects",
		"Yash Portfolio",
		"Yash Developer",
		"Yash Engineer",
		"Yash Architect",
		"Yash Programmer",
		"Kumar Developer",
		"Kumar Engineer",
		"VLSI Engineer",
		"ECE Engineer",
		"ECE Developer",
		"NIT Developer",
		"Warangal Engineer",
		"Backend Engineer",
		"Systems Developer",
		"Android Engineer",
		"Fullstack Engineer",
		"TypeScript Engineer",
		"Docker Developer",
		"Distributed Developer",
		"AI Developer",
		"Real-time Developer",
		"Prisma Engineer",
		"Next.js Engineer",
		"Competitive Programmer",
		"VLSI Architect"
	],
	authors: [{ name: "Yash Kumar", url: "https://github.com/devyk100" }],
	creator: "Yash Kumar (Juquox | devyk100)",
	publisher: "Yash Kumar",
	metadataBase: new URL("https://yashk.dev"),
	alternates: {
		canonical: "https://yashk.dev",
	},
	openGraph: {
		title: "Juquox | Yash Kumar — Backend Developer",
		description:
			"Portfolio of Juquox (Yash Kumar | devyk100) showcasing real-world backend projects, systems programming projects, Ai tools projects, and more.",
		url: "https://yashk.dev",
		siteName: "Portfolio | Juquox | deyvk100",
		images: [
			{
				url: "/yarei.jpeg",
				width: 1200,
				height: 630,
				alt: "Juquox - Yash Kumar Portfolio Preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Juquox | devyk100 | Yash Ramesh Kumar — Backend Developer",
		description:
			"Juquox: Building real-time engines, decentralized apps, and backend systems that just work.",
		site: "@devyk100",
		creator: "@devyk100",
		images: ["/yarei.jpeg"],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
	},
	icons: {
		icon: [{ url: "/yarei.jpeg" }, { url: "/favicon.ico" }],
	},
	verification: {
		google: "Skibidy toilet",
	},
	category: "Technology",
	// archives: ["https://smoggyowo.tech/blog"],
	assets: ["https://smoggyowo.tech/public"],
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${montserratSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
			>
				<MagneticCursor />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
