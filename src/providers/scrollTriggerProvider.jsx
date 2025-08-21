"use client";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export function ScrollTriggerProvider({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => gsap.ticker.remove(update);
    }, []);

    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                smooth: true,
                smoothTouch: false,
            }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
}
