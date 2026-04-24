"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
    const [hidden, setHidden] = useState(false);
    const preloaderRef = useRef<HTMLDivElement>(null);
    const svgPathRef = useRef<SVGPathElement>(null);
    const logoTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.classList.add("loading");

        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        const tl = gsap.timeline({
            delay: 0.3,
            onComplete: () => {
                document.body.classList.remove("loading");
                setHidden(true);
            },
        });

        if (logoTextRef.current) {
            tl.to(logoTextRef.current, {
                delay: 0.6,
                y: -100,
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
            });
        }

        if (svgPathRef.current) {
            tl.to(
                svgPathRef.current,
                {
                    duration: 0.5,
                    attr: { d: curve },
                    ease: "power2.in",
                },
                "-=0.2"
            );
            tl.to(svgPathRef.current, {
                duration: 0.5,
                attr: { d: flat },
                ease: "power2.out",
            });
        }

        if (preloaderRef.current) {
            tl.to(preloaderRef.current, {
                y: -1500,
                duration: 0.8,
                ease: "power2.inOut",
            });
            tl.set(preloaderRef.current, {
                zIndex: -1,
                display: "none",
            });
        }
    }, []);

    if (hidden) return null;

    return (
        <div ref={preloaderRef} className="preloader amt-loading">
            <div className="loader-svg">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path
                        ref={svgPathRef}
                        id="svg"
                        d="M0 971.8326S175 947.3259 500 947.3259s500 19.8363 500 19.8363V0H0Z"
                    />
                </svg>
            </div>
            <div ref={logoTextRef} className="logo-text-wrapper">
                <div className="logo-text-inner">
                    {"AmentoTech".split("").map((char, i) => (
                        <div key={i} className="logo-text-span">
                            {char}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
