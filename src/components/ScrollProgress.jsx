import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScroll((scrolled / maxHeight) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}
