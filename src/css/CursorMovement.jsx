import { useEffect } from "react";
import "./CursorMovement.css";

function CursorMovement() {
  useEffect(() => {
    let animationFrameId;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      document.documentElement.style.setProperty("--cursor-x", `${currentX.toFixed(1)}px`);
      document.documentElement.style.setProperty("--cursor-y", `${currentY.toFixed(1)}px`);
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div className="cursor-spotlight" aria-hidden="true" />;
}

export default CursorMovement;
