"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx - 5 + "px";
        dotRef.current.style.top = my - 5 + "px";
      }
    };

    const touch =
      window.matchMedia("(pointer: coarse)").matches  // finger/stylus input
      || "ontouchstart" in window                      // iOS / Android
      || navigator.maxTouchPoints > 0;                 // iPad / Surface

    const loop = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = rx - 17 + "px";
        ringRef.current.style.top = ry - 17 + "px";
      }
      requestAnimationFrame(loop);
    };

    const grow = () => {
      if (dotRef.current) dotRef.current.style.transform = "scale(2.5)";
      if (ringRef.current) ringRef.current.style.transform = "scale(1.6)";
    };
    const shrink = () => {
      if (dotRef.current) dotRef.current.style.transform = "scale(1)";
      if (ringRef.current) ringRef.current.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", onMove);
    loop();
    document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
