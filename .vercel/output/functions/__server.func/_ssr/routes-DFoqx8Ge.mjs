import { i as __toESM } from "../_runtime.mjs";
import { d as require_react_dom, q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight, i as ChevronUp, r as Play, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DFoqx8Ge.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var preview = (id) => `https://drive.google.com/file/d/${id}/preview`;
var projects = [
	{
		id: 1,
		title: "Therap Car Race Game",
		category: "Interactive Game",
		videoUrl: preview("1Wv_qb6v8FeW33l187aNb-fnTwJgo7NDX"),
		image: "/images/therap-car-race.jpg",
		span: "md:col-span-7",
		featured: true
	},
	{
		id: 2,
		title: "Flappy Bird",
		category: "Mobile Game",
		videoUrl: preview("1taM7Lu-Eb8ZL_LK06r8MbD3TmMtjGK0k"),
		image: "/images/flappy-bird.jpg",
		span: "md:col-span-5",
		featured: true
	},
	{
		id: 3,
		title: "VR Milky Bar Journey",
		category: "VR Experience",
		videoUrl: preview("12OKb7VGzBNXKIj80msttuERIR2qQ3hPl"),
		image: "/images/vr-milky-bar.jpg",
		span: "md:col-span-5",
		featured: true
	},
	{
		id: 4,
		title: "Mixed Reality VR Experience - Operation Theatre",
		category: "Mixed Reality",
		videoUrl: preview("1wS1JE_kwZGKqvcCz4dsbqmDnEQs26AgB"),
		image: "/images/operation-theatre-mr.jpg",
		span: "md:col-span-7",
		featured: true
	},
	{
		id: 5,
		title: "Bellissimo Motion Game Solution",
		category: "Motion Game",
		videoUrl: preview("1Bgv_yaOCGhLs5Ze1VbfIdlu_TfyH8zW_"),
		image: "/images/bellissimo.jpg",
		span: "md:col-span-7",
		featured: true
	},
	{
		id: 6,
		title: "Penalty Shoot - Mobile",
		category: "Mobile Game",
		videoUrl: preview("1NUYxlE4L02D7Zdp8LjIQnxri1TvQw_iS"),
		image: "/images/penalty-shoot.jpg",
		span: "md:col-span-5",
		featured: true
	},
	{
		id: 7,
		title: "Boo Bear",
		category: "Interactive / Game",
		videoUrl: preview("1ZihKI5p_wtyKlQta0e0J_nHspng8eORE"),
		image: "/images/boo-bear.jpg",
		span: "md:col-span-5",
		featured: true
	},
	{
		id: 8,
		title: "TiKA AR Mural",
		category: "AR Experience",
		videoUrl: preview("1Fk0BnCil16aSUvLzZFReekm1k2wdHQ9J"),
		image: "/images/tika-ar-mural.jpg",
		span: "md:col-span-7",
		featured: true
	},
	{
		id: 9,
		title: "bKash Offer Catcher",
		category: "AR Experience",
		videoUrl: preview("1jlAZbn1D6HB4LLiPx_IsU21AO4CVmpRG"),
		image: "/images/bkash-offer-catcher.jpg",
		span: "md:col-span-5"
	},
	{
		id: 10,
		title: "Nisa Card - Rotoscope",
		category: "Motion Film",
		videoUrl: preview("14nzIqCOcHwcXHL5DExaVQkG64oRZbDYi"),
		image: "/images/nisa-card-rotoscope.jpg",
		span: "md:col-span-7"
	},
	{
		id: 11,
		title: "Motion Tracking Brush System",
		category: "Motion Game",
		videoUrl: preview("11HnStMhwJeMdiSL2F3MB-PFcwbC0B_uU"),
		image: "/images/motion-tracking-brush.jpg",
		span: "md:col-span-7"
	},
	{
		id: 12,
		title: "Interactive Book Projection",
		category: "Interactive",
		videoUrl: preview("1mIRPQ5y69R_rMDHaiB3bJ6nHf7h7V6dk"),
		image: "/images/interactive-book.jpg",
		span: "md:col-span-5"
	},
	{
		id: 13,
		title: "Robi Next-Gen AR Photo booth",
		category: "AR Experience",
		videoUrl: preview("1bfQZRTeYwE8PzOtoSfhHEWXIhIDpNtZg"),
		image: "/images/robi-ar-photobooth.jpg",
		span: "md:col-span-5"
	},
	{
		id: 14,
		title: "Bondstein VR Motorbike Experience",
		category: "VR Experience",
		videoUrl: preview("1BlfmPrXZerVrWhARyeA_LRNqo9kixk2e"),
		image: "/images/bondstein-vr-motorbike.jpg",
		span: "md:col-span-7"
	},
	{
		id: 15,
		title: "DBL - Photo with Shakib",
		category: "AR Experience",
		videoUrl: preview("1MsQwtmAFlkc9UWk-6Va8hF8yyhyv0lg8"),
		image: "/images/dbl-photo-shakib.jpg",
		span: "md:col-span-5"
	},
	{
		id: 16,
		title: "Maggi VR Beat Saber",
		category: "VR Game",
		videoUrl: preview("1DpyyupFnhiCHTixFlK88TifkG2FsTuXe"),
		image: "/images/maggi-vr-beat-saber.jpg",
		span: "md:col-span-7"
	},
	{
		id: 17,
		title: "VR Smart Bangladesh",
		category: "VR Experience",
		videoUrl: preview("1bzAzUUK9npNhH3FKSVjnWSrRLBgBHYQ2"),
		image: "/images/vr-smart-bangladesh.jpg",
		span: "md:col-span-7"
	},
	{
		id: 18,
		title: "Kinect Coloring",
		category: "Motion Game",
		videoUrl: preview("1njIgwY8K2FzIAJgHJhYo17P3sjJguClx"),
		image: "/images/kinect-coloring.jpg",
		span: "md:col-span-5"
	},
	{
		id: 19,
		title: "Interactive Wall",
		category: "Interactive",
		videoUrl: preview("1dcYLeLXqoiucO_0ASqx2PH-Y9w4WuVSc"),
		image: "/images/interactive-wall.jpg",
		span: "md:col-span-7"
	},
	{
		id: 20,
		title: "Q/A Spaceship Game",
		category: "Interactive Game",
		videoUrl: preview("1yaaZwZjwbTgDQS3LBlZ7kZ8e10kngUuq"),
		image: "/images/qa-spaceship.jpg",
		span: "md:col-span-5"
	},
	{
		id: 21,
		title: "Marker based interactive AV Zone",
		category: "AR Experience",
		videoUrl: preview("1Xw-QPeb_YlFXAwGTyNSxt8X9KjIGhRPh"),
		image: "/images/marker-av-zone.jpg",
		span: "md:col-span-5"
	},
	{
		id: 22,
		title: "Motion detection AV Player",
		category: "Motion",
		videoUrl: preview("1OUNhBtQSaPzfBl1h9fBe5R4XtV2FdXjQ"),
		image: "/images/motion-av-player.jpg",
		span: "md:col-span-7"
	},
	{
		id: 23,
		title: "HMO Holographic 3D intro",
		category: "Holographic",
		videoUrl: preview("1LM211EzAgyZE6B8do_or44a-aD-0sFam"),
		image: "/images/hmo-holographic-intro.jpg",
		span: "md:col-span-7"
	},
	{
		id: 24,
		title: "HMO Q/A Buzzer",
		category: "Interactive",
		videoUrl: preview("12sGbOcPXd10NRHEUffeNDxhWAL1-65SX"),
		image: "/images/hmo-qa-buzzer.jpg",
		span: "md:col-span-5"
	},
	{
		id: 25,
		title: "Trivia",
		category: "Interactive Game",
		videoUrl: preview("1VEiqEuhNbAwezVcRfhK3dL-g3ugHWLHl"),
		image: "/images/trivia.jpg",
		span: "md:col-span-5"
	},
	{
		id: 26,
		title: "Therap24 interactive signature wall",
		category: "Interactive",
		videoUrl: preview("1lCIxQWB060X7zrbzsFOsZFHIj1OldpxB"),
		image: "/images/therap24-signature-wall.jpg",
		span: "md:col-span-7"
	},
	{
		id: 27,
		title: "Therap AR 360 Photobooth",
		category: "AR Experience",
		videoUrl: preview("12AC8edvhnq8537_zI_06iR0nUMZgi7f5"),
		image: "/images/therap-ar-360-photobooth.jpg",
		span: "md:col-span-5"
	},
	{
		id: 28,
		title: "MEDX bubble shooting game",
		category: "Interactive Game",
		videoUrl: preview("1jAhWAy0VyIKZqu4s8cYlbeXzCcAXvraW"),
		image: "/images/medx-bubble-shooting.jpg",
		span: "md:col-span-7"
	},
	{
		id: 29,
		title: "3D Projection room",
		category: "Projection",
		videoUrl: preview("1_xS8KMok7h-mROx9aAvFT3KZ6HiAK_yf"),
		image: "/images/projection-room-3d.jpg",
		span: "md:col-span-7"
	},
	{
		id: 30,
		title: "Kitkat Hall of Fame",
		category: "Interactive",
		videoUrl: preview("1m0EIQFwSVT6uHb8G1h0guKLxDBzFUAbt"),
		image: "/images/kitkat-hall-of-fame.jpg",
		span: "md:col-span-5"
	},
	{
		id: 31,
		title: "Stomach story",
		category: "Interactive",
		videoUrl: preview("15zlsmpFy0-Ay0KS7Zj5Vz0azuEZhuObp"),
		image: "/images/stomach-story.jpg",
		span: "md:col-span-5"
	},
	{
		id: 32,
		title: "AR Projection Flipbook",
		category: "AR Experience",
		videoUrl: preview("1araoeYV7pR63TJK15Hrhgllsnmmyf_v_"),
		image: "/images/ar-projection-flipbook.jpg",
		span: "md:col-span-7"
	},
	{
		id: 33,
		title: "Immunity catcher game",
		category: "Interactive Game",
		videoUrl: preview("1JSwDVCnea9Fb_wFiL2xc4snRsklSXrIN"),
		image: "/images/immunity-catcher.jpg",
		span: "md:col-span-5"
	},
	{
		id: 34,
		title: "MILO Cricket",
		category: "Interactive Game",
		videoUrl: preview("176S3_7GZRTZWkd3_QLtGdxaiNGFyBiTy"),
		image: "/images/milo-cricket.jpg",
		span: "md:col-span-7"
	},
	{
		id: 35,
		title: "Partner VR experience",
		category: "VR Experience",
		videoUrl: preview("1YGGcdVxFaAtzuVardgUtDlxr6Ekvm8nL"),
		image: "/images/partner-vr.jpg",
		span: "md:col-span-7"
	},
	{
		id: 36,
		title: "Lyfe Markerbased catcher game",
		category: "AR Game",
		videoUrl: preview("138AbQZMuSkxQgfwPihMKYcsezj_aRoYn"),
		image: "/images/lyfe-marker-catcher.jpg",
		span: "md:col-span-5"
	},
	{
		id: 37,
		title: "Lifebuoy AR photobooth",
		category: "AR Experience",
		videoUrl: preview("1oce9B7IaGSGX3d7Q65bmms8EdTmt81N8"),
		image: "/images/lifebuoy-ar-photobooth.jpg",
		span: "md:col-span-7"
	},
	{
		id: 38,
		title: "Power 2D Game",
		category: "Interactive Game",
		videoUrl: preview("1WZrQzLDnBaAifOVqmqwVU_V6fhTAfh7a"),
		image: "/images/power-2d-game.jpg",
		span: "md:col-span-5"
	},
	{
		id: 39,
		title: "AR Stall",
		category: "AR Experience",
		videoUrl: preview("1YSVylxYVCFb2q3BQ7CRKtoDPUU9y-bo8"),
		image: "/images/ar-stall.jpg",
		span: "md:col-span-5"
	}
];
var explorations = [
	{
		src: "/images/explore-01.jpg",
		projectId: 1,
		alt: "Night race through a neon city"
	},
	{
		src: "/images/explore-02.jpg",
		projectId: 2,
		alt: "Skyward mobile bird study"
	},
	{
		src: "/images/explore-03.jpg",
		projectId: 3,
		alt: "Chocolate world environment"
	},
	{
		src: "/images/explore-04.jpg",
		projectId: 4,
		alt: "Holographic anatomy theatre"
	},
	{
		src: "/images/explore-05.jpg",
		projectId: 5,
		alt: "Motion game installation"
	},
	{
		src: "/images/explore-06.jpg",
		projectId: 6,
		alt: "Penalty strike freeze-frame"
	},
	{
		src: "/images/explore-07.jpg",
		projectId: 7,
		alt: "Boo Bear character study"
	},
	{
		src: "/images/explore-08.jpg",
		projectId: 8,
		alt: "AR mural lifting off a wall"
	}
];
var journal = [
	{
		index: "01",
		title: "Spatial narrative",
		body: "Stories in VR do not scroll. They surround. We write beats for the body — where you turn, what you reach for, what you dare to approach."
	},
	{
		index: "02",
		title: "Hands, gaze, presence",
		body: "Interaction is designed for how people actually move. Gaze as invitation, hands as grammar, locomotion as pacing."
	},
	{
		index: "03",
		title: "Performance as material",
		body: "Ninety frames is not a spec, it is a feeling. Comfort, clarity and brand craft are the same problem."
	},
	{
		index: "04",
		title: "Brands, made inhabitable",
		body: "From a thirty-second film to a world you can walk through. We turn campaigns into places people remember with their bodies."
	}
];
var stats = [
	{
		value: 30,
		suffix: "+",
		label: "Immersive Projects"
	},
	{
		value: 15,
		suffix: "+",
		label: "Brand Partners"
	},
	{
		value: 100,
		suffix: "%",
		label: "Client Satisfaction"
	}
];
var socials = [
	{
		label: "Instagram",
		href: "https://instagram.com/singularityimmersive"
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/singularity-immersive"
	},
	{
		label: "X",
		href: "https://x.com/singularityimmersive"
	}
];
var STUDIO_EMAIL = "hello@singularityimmersive.com";
var ROLES = [
	"VR",
	"AR",
	"Mixed Reality",
	"Interactive"
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function prefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
var DOTS = Array.from({ length: 32 }, (_, i) => ({
	left: `${i * 37 % 97 + 1}%`,
	top: `${i * 53 % 97 + 1}%`,
	size: 1 + i % 3,
	delay: `${i % 8 * .35}s`,
	duration: `${7 + i % 6}s`,
	opacity: .15 + i % 5 * .06
}));
function ParticleField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 z-[2] overflow-hidden",
		"aria-hidden": true,
		children: DOTS.map((dot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute rounded-full bg-accent-from animate-pulse-soft",
			style: {
				left: dot.left,
				top: dot.top,
				width: dot.size,
				height: dot.size,
				opacity: dot.opacity,
				animationDelay: dot.delay,
				animationDuration: dot.duration
			}
		}, i))
	});
}
var MARQUEE = "BUILDING THE FUTURE OF IMMERSIVE  •  ";
function Contact() {
	const track = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (!track.current || prefersReducedMotion()) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(".marquee-track", {
				xPercent: -50,
				repeat: -1,
				duration: 28,
				ease: "none"
			});
		}, track);
		return () => ctx.revert();
	}, []);
	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(STUDIO_EMAIL);
			toast.success("Email copied");
		} catch {
			toast.error("Could not copy — use the mail link");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "relative overflow-hidden bg-bg pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 opacity-25",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "absolute inset-0 h-full w-full scale-x-[-1] object-cover",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "metadata",
					poster: "/images/explore-04.jpg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/videos/hero.mp4",
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: track,
				className: "overflow-hidden border-y border-stroke py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "marquee-track flex w-max font-display text-4xl text-text-primary/80 italic md:text-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pr-6 whitespace-nowrap",
						children: MARQUEE.repeat(8)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pr-6 whitespace-nowrap",
						"aria-hidden": true,
						children: MARQUEE.repeat(8)
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-10 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-6 inline-flex items-center gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-pulse-soft rounded-full bg-signal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative size-2 rounded-full bg-signal" })]
							}), "Available for projects"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "max-w-xl text-3xl leading-tight font-medium tracking-tight md:text-5xl",
							children: [
								"Let’s build the next world",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-normal italic",
									children: "together."
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: copyEmail,
							className: "group relative inline-flex self-start rounded-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient pointer-events-none absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-sm font-medium text-bg group-hover:bg-bg group-hover:text-text-primary",
								children: ["Copy email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									strokeWidth: 1.75
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${STUDIO_EMAIL}`,
						className: "mt-12 block font-display text-2xl text-text-primary italic transition-opacity hover:opacity-70 md:text-5xl lg:text-6xl",
						children: STUDIO_EMAIL
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-col gap-8 border-t border-stroke pt-8 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "Social",
							className: "flex flex-wrap gap-2",
							children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-full border border-stroke px-4 py-2 text-sm text-muted transition-colors hover:border-muted hover:text-text-primary",
								children: s.label
							}, s.label))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"Dhaka, Bangladesh · © ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Singularity Immersive"
							]
						})]
					})
				]
			})]
		})]
	});
}
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
function Explorations({ onOpen }) {
	const sectionRef = (0, import_react.useRef)(null);
	const left = explorations.filter((_, i) => i % 2 === 0);
	const right = explorations.filter((_, i) => i % 2 === 1);
	(0, import_react.useLayoutEffect)(() => {
		if (!sectionRef.current) return;
		const refresh = () => {
			ScrollTrigger.refresh();
		};
		let raf = 0;
		const scheduleRefresh = () => {
			if (raf) return;
			raf = window.requestAnimationFrame(() => {
				raf = 0;
				refresh();
			});
		};
		if (prefersReducedMotion()) {
			window.addEventListener("works-layout", refresh);
			window.addEventListener("resize", refresh);
			const t = window.setTimeout(refresh, 80);
			return () => {
				window.clearTimeout(t);
				window.removeEventListener("works-layout", refresh);
				window.removeEventListener("resize", refresh);
			};
		}
		const trigger = sectionRef.current;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(".explore-col-a", { yPercent: 8 }, {
				yPercent: -28,
				ease: "none",
				scrollTrigger: {
					trigger,
					start: "top bottom",
					end: "bottom top",
					scrub: .6,
					invalidateOnRefresh: true
				}
			});
			gsapWithCSS.fromTo(".explore-col-b", { yPercent: -12 }, {
				yPercent: 18,
				ease: "none",
				scrollTrigger: {
					trigger,
					start: "top bottom",
					end: "bottom top",
					scrub: .8,
					invalidateOnRefresh: true
				}
			});
		}, sectionRef);
		window.addEventListener("works-layout", scheduleRefresh);
		window.addEventListener("resize", scheduleRefresh);
		const t = window.setTimeout(refresh, 80);
		return () => {
			window.clearTimeout(t);
			window.cancelAnimationFrame(raf);
			window.removeEventListener("works-layout", scheduleRefresh);
			window.removeEventListener("resize", scheduleRefresh);
			ctx.revert();
		};
	}, []);
	const openById = (id) => {
		const project = projects.find((p) => p.id === id);
		if (project) onOpen(project);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		id: "explorations",
		className: "relative min-h-[220vh] bg-bg md:min-h-[300vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 flex h-dvh items-center overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_0%_4%/0.78)_0%,hsl(0_0%_4%/0.2)_55%,transparent_75%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative text-eyebrow tracking-eyebrow text-muted uppercase",
						children: "Explorations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "relative mt-4 font-display text-5xl text-text-primary italic md:text-7xl lg:text-8xl",
						children: ["Visual ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-body font-medium not-italic",
							children: "playground"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid h-full w-full max-w-[1400px] grid-cols-2 gap-3 px-3 pt-24 md:grid-cols-12 md:gap-8 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "explore-col-a col-span-1 flex flex-col gap-3 md:col-span-4 md:gap-6",
						children: left.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExploreStill, {
							item,
							onOpen: () => openById(item.projectId)
						}, item.src))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:col-span-4 md:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "explore-col-b col-span-1 flex flex-col gap-3 pt-16 md:col-span-4 md:gap-6 md:pt-32",
						children: right.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExploreStill, {
							item,
							onOpen: () => openById(item.projectId)
						}, item.src))
					})
				]
			})]
		})
	});
}
function ExploreStill({ item, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: "group relative aspect-[4/5] overflow-hidden rounded-3xl border border-stroke bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: item.src,
			alt: item.alt,
			className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-bg/20 transition-colors duration-300 group-hover:bg-bg/40" })]
	});
}
function Hero({ ready }) {
	const root = (0, import_react.useRef)(null);
	const [roleIndex, setRoleIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const id = window.setInterval(() => {
			setRoleIndex((i) => (i + 1) % ROLES.length);
		}, 2e3);
		return () => window.clearInterval(id);
	}, [ready]);
	(0, import_react.useLayoutEffect)(() => {
		if (!ready || !root.current) return;
		if (prefersReducedMotion()) return;
		const ctx = gsapWithCSS.context(() => {
			const tl = gsapWithCSS.timeline({ defaults: { ease: "power3.out" } });
			tl.fromTo(".name-reveal", {
				opacity: 0,
				y: 50
			}, {
				opacity: 1,
				y: 0,
				duration: 1.2,
				delay: .1
			});
			tl.fromTo(".blur-in", {
				opacity: 0,
				filter: "blur(10px)",
				y: 20
			}, {
				opacity: 1,
				filter: "blur(0px)",
				y: 0,
				duration: 1,
				stagger: .1
			}, .3);
		}, root);
		return () => ctx.revert();
	}, [ready]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		id: "home",
		className: "relative flex min-h-dvh items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						className: "absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						preload: "auto",
						poster: "/images/explore-01.jpg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "/videos/hero.mp4",
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain pointer-events-none absolute inset-0 z-[3] opacity-40 mix-blend-overlay" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 z-[4] h-48 bg-gradient-to-t from-bg to-transparent" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-24 pb-28 text-center md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "blur-in mb-8 text-eyebrow tracking-eyebrow text-muted uppercase",
						children: "Immersive Experiences"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "name-reveal mb-6 font-display text-6xl leading-[0.9] font-normal tracking-tight text-text-primary italic md:text-8xl lg:text-9xl",
						children: "Singularity Immersive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "blur-in mb-5 text-base text-muted md:text-lg",
						children: [
							"A",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "animate-role-fade-in inline-block font-display text-text-primary italic",
								children: ROLES[roleIndex]
							}, roleIndex),
							" ",
							"studio in Dhaka."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "blur-in mb-12 max-w-md text-sm text-muted md:text-base",
						children: "Crafting immersive digital worlds, interactive games, AR experiences and motion solutions that bring brands to life."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "blur-in inline-flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#work",
							className: "group relative inline-flex rounded-full transition-transform duration-200 hover:scale-105 active:scale-[0.96]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient pointer-events-none absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative inline-flex items-center rounded-full bg-text-primary px-7 py-3.5 text-sm font-medium text-bg transition-colors duration-200 group-hover:bg-bg group-hover:text-text-primary",
								children: "See Works"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group relative inline-flex rounded-full transition-transform duration-200 hover:scale-105 active:scale-[0.96]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient pointer-events-none absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative inline-flex items-center gap-2 rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm font-medium text-text-primary transition-colors duration-200 group-hover:border-transparent",
								children: ["Reach out", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									strokeWidth: 1.75
								})]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-eyebrow tracking-scroll text-muted uppercase",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative h-10 w-px overflow-hidden bg-stroke",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 h-3 w-px bg-text-primary animate-scroll-down" })
				})]
			})
		]
	});
}
function SectionHeading({ eyebrow, heading, subtext, actionHref, actionLabel, onAction, actionExpanded, className }) {
	const showAction = Boolean(actionLabel) && Boolean(onAction || actionHref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: cn("mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8 md:mb-16", className),
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: 1,
			ease: [
				.25,
				.1,
				.25,
				1
			]
		},
		viewport: {
			once: true,
			margin: "-100px"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8 bg-stroke",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-eyebrow tracking-eyebrow text-muted uppercase",
						children: eyebrow
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl leading-tight font-medium tracking-tight text-text-primary md:text-5xl",
					children: heading
				}),
				subtext ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-lg text-sm text-muted md:text-base",
					children: subtext
				}) : null
			]
		}), showAction ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
			href: onAction ? void 0 : actionHref,
			onClick: onAction,
			expanded: actionExpanded,
			children: actionLabel
		}) : null]
	});
}
function ActionButton({ href, onClick, expanded, children }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary",
		children: [children, expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
			className: "size-4",
			strokeWidth: 1.75
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "size-4",
			strokeWidth: 1.75
		})]
	})] });
	const className = "group relative inline-flex shrink-0 self-start rounded-full sm:self-auto";
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className,
		"aria-expanded": expanded,
		children: inner
	});
}
function Journal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "journal",
		className: "bg-bg py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Insights",
				heading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"How we",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-normal italic",
						children: "build worlds"
					})
				] }),
				subtext: "A short field guide to making VR, AR and mixed reality feel inevitable — not ornamental."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: journal.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-stroke bg-surface p-6 md:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-eyebrow text-muted italic",
							children: item.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-medium text-text-primary",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: item.body
						})
					]
				}, item.index))
			})]
		})
	});
}
var WORDS = [
	"Design",
	"Create",
	"Immerse"
];
var DURATION_MS = 2700;
function LoadingScreen({ onComplete }) {
	const [count, setCount] = (0, import_react.useState)(0);
	const [wordIndex, setWordIndex] = (0, import_react.useState)(0);
	const completed = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion()) {
			setCount(100);
			const t = window.setTimeout(onComplete, 200);
			return () => window.clearTimeout(t);
		}
		const start = performance.now();
		let raf = 0;
		const tick = (now) => {
			const progress = Math.min(100, (now - start) / DURATION_MS * 100);
			setCount(progress);
			setWordIndex(Math.min(2, Math.floor((now - start) / 900)));
			if (progress < 100) {
				raf = requestAnimationFrame(tick);
				return;
			}
			if (!completed.current) {
				completed.current = true;
				window.setTimeout(onComplete, 400);
			}
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [onComplete]);
	const display = String(Math.round(count)).padStart(3, "0");
	const scale = count / 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-loader flex flex-col bg-bg",
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		role: "status",
		"aria-live": "polite",
		"aria-label": "Loading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "absolute top-8 left-6 text-eyebrow font-medium tracking-eyebrow text-muted uppercase md:top-10 md:left-10",
				initial: {
					y: -20,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: "Immersive"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl",
						initial: {
							y: 20,
							opacity: 0
						},
						animate: {
							y: 0,
							opacity: 1
						},
						exit: {
							y: -20,
							opacity: 0
						},
						transition: {
							duration: .45,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: WORDS[wordIndex]
					}, WORDS[wordIndex])
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute right-6 bottom-16 font-display text-6xl text-text-primary tabular-nums md:right-10 md:bottom-20 md:text-8xl lg:text-9xl",
				children: display
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 h-[3px] bg-stroke/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "accent-gradient h-full origin-left",
					style: {
						transform: `scaleX(${scale})`,
						boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)"
					}
				})
			})
		]
	});
}
var LINKS = [
	{
		href: "#home",
		label: "Home",
		id: "home"
	},
	{
		href: "#work",
		label: "Work",
		id: "work"
	},
	{
		href: "#contact",
		label: "Contact",
		id: "contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 100);
			const line = window.scrollY + window.innerHeight * .4;
			const order = [
				["home", "home"],
				["work", "work"],
				["journal", "work"],
				["explorations", "work"],
				["contact", "contact"]
			];
			let next = "home";
			for (const [id, mapped] of order) {
				const el = document.getElementById(id);
				if (!el) continue;
				if (el.getBoundingClientRect().top + window.scrollY <= line) next = mapped;
			}
			setActive(next);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 right-0 left-0 z-nav flex justify-center px-3 pt-4 sm:px-4 md:pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Primary",
			className: cn("inline-flex max-w-full flex-nowrap items-center rounded-full border border-hairline bg-surface/90 px-1.5 py-1.5 backdrop-blur-md sm:px-2 sm:py-2", scrolled && "shadow-nav"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "group relative grid size-8 shrink-0 place-items-center sm:size-9",
					"aria-label": "Singularity Immersive home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient absolute inset-0 rounded-full transition-transform duration-500 group-hover:scale-x-[-1]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-px grid place-items-center rounded-full bg-bg font-display text-logo italic leading-none text-text-primary transition-transform duration-300 group-hover:scale-110",
						children: "SI"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-1 hidden h-5 w-px bg-stroke sm:block",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-nowrap items-center",
					children: LINKS.map((link) => {
						const isActive = active === link.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: cn("whitespace-nowrap rounded-full px-2.5 py-2 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm", isActive ? "bg-stroke/50 text-text-primary" : "text-muted hover:bg-stroke/50 hover:text-text-primary"),
							children: link.label
						}, link.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-1 hidden h-5 w-px bg-stroke sm:block",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "group relative ml-0.5 inline-flex shrink-0 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-2 text-xs text-muted backdrop-blur-md transition-colors duration-200 group-hover:text-text-primary sm:px-4 sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Say hi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: "Hi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-3.5",
								strokeWidth: 1.75
							})
						]
					})]
				})
			]
		})
	});
}
function Stats() {
	const ref = (0, import_react.useRef)(null);
	const [start, setStart] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setStart(true);
				obs.disconnect();
			}
		}, { threshold: .4 });
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "bg-bg py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-3 md:gap-8 md:px-10 lg:px-16",
			children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
				target: stat.value,
				suffix: stat.suffix,
				label: stat.label,
				start
			}, stat.label))
		})
	});
}
function Stat({ target, suffix, label, start }) {
	const value = useCountUp(target, start);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-stroke pt-8 text-center md:text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-5xl tracking-tight text-text-primary tabular-nums md:text-7xl",
			children: [value, suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm tracking-scroll text-muted uppercase",
			children: label
		})]
	});
}
function useCountUp(target, start, duration = 1400) {
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!start) return;
		if (prefersReducedMotion()) {
			setValue(target);
			return;
		}
		let raf = 0;
		const t0 = performance.now();
		const tick = (now) => {
			const p = Math.min(1, (now - t0) / duration);
			const eased = 1 - (1 - p) ** 3;
			setValue(Math.round(target * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		start,
		target,
		duration
	]);
	return value;
}
function VideoModal({ project, onClose }) {
	const closeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!project) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [project, onClose]);
	if (!project || typeof document === "undefined") return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-modal flex items-center justify-center p-4 md:p-10",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "video-modal-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-bg/80 backdrop-blur-md",
			"aria-label": "Close video",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex w-full max-w-5xl flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-eyebrow tracking-eyebrow text-muted uppercase",
					children: project.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "video-modal-title",
					className: "mt-1 font-display text-2xl text-text-primary italic md:text-3xl",
					children: project.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: closeRef,
					type: "button",
					onClick: onClose,
					className: "grid size-11 shrink-0 place-items-center rounded-full border border-stroke bg-surface text-text-primary transition-colors hover:border-muted",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						strokeWidth: 1.75
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-video overflow-hidden rounded-3xl border border-stroke bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: project.videoUrl,
					title: project.title,
					allow: "autoplay",
					allowFullScreen: true,
					className: "absolute inset-0 h-full w-full"
				})
			})]
		})]
	}), document.body);
}
function notifyWorksLayout() {
	window.dispatchEvent(new Event("works-layout"));
}
function Works({ onOpen }) {
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const featured = (0, import_react.useMemo)(() => projects.filter((p) => p.featured), []);
	const extra = (0, import_react.useMemo)(() => projects.filter((p) => !p.featured), []);
	(0, import_react.useEffect)(() => {
		notifyWorksLayout();
		const t1 = window.setTimeout(notifyWorksLayout, 80);
		const t2 = window.setTimeout(notifyWorksLayout, 480);
		return () => {
			window.clearTimeout(t1);
			window.clearTimeout(t2);
		};
	}, [showAll]);
	const toggle = () => setShowAll((v) => !v);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "bg-bg py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Selected Work",
					heading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Featured",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-normal italic",
							children: "projects"
						})
					] }),
					subtext: "A selection of immersive experiences, games and interactive installations we've built for leading brands."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 items-stretch gap-5 md:grid-cols-12 md:gap-6",
					children: [featured.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project,
						onOpen
					}, project.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						onExitComplete: notifyWorksLayout,
						children: showAll ? extra.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: cn(project.span),
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: 12
							},
							transition: {
								duration: .4,
								delay: Math.min(i, 8) * .04,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							onAnimationComplete: notifyWorksLayout,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
								project,
								onOpen,
								fill: true
							})
						}, project.id)) : null
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: toggle,
						className: "group relative inline-flex rounded-full",
						"aria-expanded": showAll,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-6 py-3 text-sm text-text-primary",
							children: showAll ? "Show less" : `View all work — ${extra.length} more`
						})]
					})
				})
			]
		})
	});
}
function ProjectCard({ project, onOpen, fill }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onOpen(project),
		className: cn("group relative h-60 w-full overflow-hidden rounded-3xl border border-stroke bg-surface text-left sm:h-72 md:h-80", !fill && project.span),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "halftone pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg/75 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-4 left-4 rounded-full border border-hairline bg-bg/55 px-3 py-1 text-eyebrow tracking-scroll text-muted uppercase backdrop-blur-md",
				children: project.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient absolute inset-0 rounded-full opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative grid size-[calc(100%-4px)] place-items-center rounded-full bg-bg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
						className: "size-5 fill-text-primary text-text-primary",
						strokeWidth: 1.5
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-4 left-1/2 w-max max-w-[90%] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative inline-flex max-w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "accent-gradient pointer-events-none absolute -inset-[2px] rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex max-w-full flex-nowrap items-center rounded-full bg-surface px-4 py-2 text-sm leading-none text-text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0",
							children: "View —"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 min-w-0 truncate font-display italic",
							children: project.title
						})]
					})]
				})
			})
		]
	});
}
function Home() {
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [active, setActive] = (0, import_react.useState)(null);
	const complete = (0, import_react.useCallback)(() => setIsLoading(false), []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = isLoading ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isLoading]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#home",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-full focus:bg-text-primary focus:px-4 focus:py-2 focus:text-bg",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { onComplete: complete }) : null }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { ready: !isLoading }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Works, { onOpen: setActive }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explorations, { onOpen: setActive }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoModal, {
			project: active,
			onClose: () => setActive(null)
		})
	] });
}
//#endregion
export { Home as component };
