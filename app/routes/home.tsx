import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Vulktek Cybersecurity - Work in Progress" },
		{ name: "description", content: "Vulktek Cybersecurity - System Initialization" },
	];
}

export default function Home() {
	return (
		<div className="text-on-background min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-body-md text-body-md selection:bg-tech-orange/30 selection:text-white scanline-effect bg-surface-dim">
			{/* Subtle Animated Grid Background */}
			<div className="absolute inset-0 grid-bg pointer-events-none opacity-40"></div>
			
			{/* Background Glow Effects */}
			<main className="relative z-10 w-full max-w-4xl px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center">
				{/* Logo Update */}
				<div className="mb-xl relative mb-12 flex items-center justify-center">
					<img alt="Vulktek Cybersecurity Logo" className="relative h-40 md:h-48 w-auto object-contain z-10 drop-shadow-[0_0_15px_rgba(255,77,0,0.5)] scale-125" src="/images/logo.png" />
				</div>
				
				{/* Heading & Subheading */}
				<div className="space-y-lg mb-xl max-w-2xl mt-8">
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tech-orange/30 bg-tech-orange/5 text-tech-orange font-label-sm uppercase tracking-wider mb-sm">
						<span className="w-1.5 h-1.5 rounded-full bg-tech-orange animate-pulse-glow"></span>
						Security Protocol Active
					</div>
					<h1 className="font-display-lg text-display-lg text-white tracking-tight drop-shadow-sm mt-4">
						System Initialization
					</h1>
					<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mt-6">
						Our secure infrastructure is currently being deployed. Vulktek is coming soon to protect your digital assets with precision and resilience.
					</p>
				</div>
				
				{/* High-tech Progress Bar */}
				<div className="w-full max-w-md mb-xl glass-panel p-6 rounded-lg mt-8">
					<div className="flex justify-between items-center mb-4">
						<span className="font-label-sm text-label-sm text-tech-orange uppercase tracking-widest flex items-center gap-2">
							<span className="material-symbols-outlined text-[16px] animate-spin" style={{ animationDuration: "3s" }}>radar</span>
							Scanning Network...
						</span>
						<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
							sys_init_v3.1
						</span>
					</div>
					<div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden border border-outline/50 relative">
						<div className="h-full bg-tech-orange w-[70%] animate-progress relative shadow-[0_0_10px_rgba(255,77,0,0.5)]">
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-[200%] animate-[progress_2s_linear_infinite]"></div>
						</div>
					</div>
					<div className="mt-3 text-left font-label-sm text-on-surface-variant/70 text-[10px] uppercase font-mono">
						Establishing secure handshake... [OK]
					</div>
				</div>
			</main>
			
			{/* Glassmorphic CTA Form */}
			<form className="relative z-20 w-full max-w-md glass-panel p-lg rounded-xl mb-xl mx-auto transition-all duration-300 hover:border-tech-orange/40" onSubmit={(e) => e.preventDefault()}>
				<div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-tech-orange/50 to-transparent"></div>
				<label className="block font-label-md text-label-md text-white mb-sm text-left flex items-center gap-2" htmlFor="email">
					<span className="material-symbols-outlined text-[18px] text-tech-orange">lock</span>
					Secure Early Access
				</label>
				<div className="flex flex-col sm:flex-row gap-sm">
					<div className="relative flex-grow">
						<span className="absolute inset-y-0 left-0 flex items-center pl-sm pointer-events-none text-on-surface-variant">
							<span className="material-symbols-outlined text-[18px]">terminal</span>
						</span>
						<input className="w-full bg-surface-container-lowest/50 border border-outline/50 text-white rounded font-label-md text-label-md py-sm pl-[36px] pr-sm focus:outline-none focus:border-tech-orange focus:ring-1 focus:ring-tech-orange transition-colors placeholder:text-on-surface-variant/50 font-mono" id="email" placeholder="engineer@enterprise.com" required type="email" />
					</div>
					<button className="bg-tech-orange text-white font-label-md text-label-md px-lg py-sm rounded hover:bg-orange-600 transition-all duration-200 shadow-[0_0_15px_rgba(255,77,0,0.2)] hover:shadow-[0_0_20px_rgba(255,77,0,0.4)] whitespace-nowrap flex items-center justify-center gap-2 group font-bold" type="submit">
						Initialize
						<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
					</button>
				</div>
				<div className="flex justify-between items-center mt-sm">
					<p className="font-label-sm text-label-sm text-on-surface-variant text-left opacity-70">Encrypted comms only.</p>
					<span className="material-symbols-outlined text-[14px] text-tech-orange opacity-70">verified_user</span>
				</div>
			</form>
			
			<footer className="absolute bottom-0 w-full py-md border-t border-outline/30 bg-background/80 backdrop-blur-md z-10 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop">
				<div className="font-headline-sm text-headline-sm font-bold text-white mb-sm md:mb-0 flex items-center gap-2">
					<img alt="Vulktek mark" className="h-6 w-auto brightness-200" src="/images/mark.png" />
				</div>
				<div className="font-label-sm text-label-sm text-on-surface-variant font-mono text-[10px] uppercase">
					© 2024 Vulktek Cybersecurity. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
