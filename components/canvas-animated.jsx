import React, { useEffect, useRef, useState } from "react";

const CanvasAnimated = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const imageRef = useRef(null);
  const requestRef = useRef(null);

  let imgW;
  let imgH;

  let x = 0;
  let y = 0;
  let dx = 0.75;

  const animate = () => {
    const ctx = ctxRef.current;
    const CanvasXSize = ctx.canvas.width;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    if (x > CanvasXSize) {
      // reset
      x = -imgW + x;
    }

    if (x > 0) {
      // draw additional image
      ctx.drawImage(imageRef.current, -imgW + x, y, imgW, imgH);
    }

    ctx.drawImage(imageRef.current, x, y, imgW, imgH);

    x += dx;

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d");

    imageRef.current = new Image();
    imageRef.current.src = "/images/image1.png";

    imgW = imageRef.current.width;
    imgH = imageRef.current.height;

    canvasRef.current.addEventListener("pointerover", () => {
      dx = 0.25;
    });

    canvasRef.current.addEventListener("pointerleave", () => {
      dx = 0.75;
    });

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      canvasRef.current.removeEventListener("pointerover", () => {
        dx = 0.25;
      });

      canvasRef.current.removeEventListener("pointerleave", () => {
        dx = 0.75;
      });

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      style={{
        cursor: isGrabbing ? "grabbing" : "grab",
      }}
      onPointerDown={() => setIsGrabbing(true)}
      onPointerUp={() => setIsGrabbing(false)}
      ref={canvasRef}
      width={385}
      height={760}
    />
  );
};

export default CanvasAnimated;
