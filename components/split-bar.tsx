"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "static" | "armed" | "in";

// The 90/10 bar is the thesis in one picture, so it's the one place motion
// explains something: the 10% fills in when the bar scrolls into view.
// Server render is the finished state, so it reads fine without JS.
export function SplitBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    // Already on screen at mount: leave it alone rather than blanking it.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setPhase("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="split" ref={ref} data-phase={phase}>
        <div className="s90">90%</div>
        <div className="s10">
          <span>10%</span>
        </div>
      </div>
      <div className="split-legend" data-phase={phase}>
        <span className="l">what the core system already does well</span>
        <span className="r">the part I build ↑</span>
      </div>
    </>
  );
}
