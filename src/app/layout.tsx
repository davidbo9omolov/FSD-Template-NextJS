import type { Metadata } from "next"
import type { ReactNode } from "react"

import "./styles/global.css"

export const metadata: Metadata = {
	title: "Let's Develop!",
	description: "FSD Template with Next.js by yunglocokid",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
