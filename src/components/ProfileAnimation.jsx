"use client";

import { useEffect, useRef } from "react";
import { DotLottie } from "@lottiefiles/dotlottie-web";

const ProfileAnimation = ({ fileName, className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: canvasRef.current,
      src: `/animations/${fileName}`,
    });

    return () => {
      dotLottie.destroy();
    };
  }, [fileName]);

  return (
    <canvas
      ref={canvasRef}
      width="300"
      height="300"
      className={className}
    />
  );
};

export default ProfileAnimation;