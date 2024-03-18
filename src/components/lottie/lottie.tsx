"use client";
import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: object;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationInstance: AnimationItem;

    if (animationContainer.current) {
      animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [animationData]);

  return <div ref={animationContainer} />;
};

export default LottieAnimation;
