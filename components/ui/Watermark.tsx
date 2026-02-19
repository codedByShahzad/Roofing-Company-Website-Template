"use client";
import React from "react";

type WatermarkProps = {
  text: string;
  className?: string;
};

const Watermark = ({ text, className = "" }: WatermarkProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      <div
        className={[
          "absolute left-1/2 bottom-0 -translate-x-1/2",
          "text-primaryLight/5 font-extrabold tracking-tight leading-none",
          "text-[clamp(90px,14vw,320px)]",
          className,
        ].join(" ")}
      >
        {text}
      </div>
    </div>
  );
};

export default Watermark;
