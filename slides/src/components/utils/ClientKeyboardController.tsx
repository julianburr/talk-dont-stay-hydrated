"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

function ClientKeyboardController({ max }: any) {
  const router = useRouter();
  const params = useParams();

  const s = params["slide"] as string;
  const slide = s ? parseInt(s) : 0;
  const setSlide = useCallback(
    (val: number) => {
      router.push(`/slide/${val}`);
    },
    [router]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSlide(Math.max(slide - 1, 0));
      } else if (e.key === "ArrowRight" || e.key === " ") {
        setSlide(Math.min(slide + 1, max));
      }
    };

    const handleClick = (e: any) => {
      if (e.target?.tag?.toLowerCase() !== "a") {
        setSlide(Math.min(slide + 1, max));
      }
    };

    window.document.body.addEventListener("keydown", handleKeyDown);
    window.document.body.addEventListener("click", handleClick);
    return () => {
      window.document.body.removeEventListener("keydown", handleKeyDown);
      window.document.body.removeEventListener("click", handleClick);
    };
  }, [setSlide, slide, max]);

  return null;
}

export { ClientKeyboardController };
