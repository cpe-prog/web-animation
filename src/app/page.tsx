"use client";

import { ThreeDCardDemo } from "@/components/3d-card-effects";

export default function Home() {
	return (
		<div className="flex items-center h-screen justify-center w-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<ThreeDCardDemo />
		</div>
	);
}
