"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch/pointer device — hide cursor on any touch-capable device
    const checkTouch = () => {
      const touch =
        window.matchMedia("(pointer: coarse)").matches || // finger/stylus
        "ontouchstart" in window ||                       // iOS / Android
        navigator.maxTouchPoints > 0;                     // iPad / Surface
      setIsTouch(touch);
    };

    checkTouch();

    // Also re-check if user switches input method (e.g. foldables)
    const mq = window.matchMedia("(pointer: coarse)");
    mq.addEventListener("change", checkTouch);
    return () => mq.removeEventListener("change", checkTouch);
  }, []);

  useEffect(() => {
    // Don't attach any mouse listeners on touch devices
    if (isTouch) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx - 5 + "px";
        dotRef.current.style.top  = my - 5 + "px";
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = rx - 17 + "px";
        ringRef.current.style.top  = ry - 17 + "px";
      }
      animId = requestAnimationFrame(loop);
    };

    const grow = () => {
      if (dotRef.current)  dotRef.current.style.transform  = "scale(2.5)";
      if (ringRef.current) ringRef.current.style.transform = "scale(1.6)";
    };
    const shrink = () => {
      if (dotRef.current)  dotRef.current.style.transform  = "scale(1)";
      if (ringRef.current) ringRef.current.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(loop);

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, [isTouch]);

  // On touch devices: render nothing + restore the default browser cursor
  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
