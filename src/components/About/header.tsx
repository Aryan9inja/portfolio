
import React from "react";

export default function AboutHeader() {
	return (
		<header className="bg-bg-muted/80 rounded-2xl shadow-lg p-6 flex items-center justify-between gap-6">
			<div className="flex flex-col gap-1">
				<h1 className="text-3xl md:text-5xl font-bold mb-1">
					Aryan Singh Thakur
				</h1>
				<p className="text-lg md:text-xl text-muted-foreground">
					Sunder Nagar, Himachal Pradesh, India
				</p>
			</div>
			<div className="hidden md:flex items-center justify-center">
				<img src="/dev.png" alt="Aryan Avatar" className="rounded-full w-20 h-20 md:w-32 md:h-32 object-cover shadow-md border-4 border-accent" />
			</div>
		</header>
	);
}
