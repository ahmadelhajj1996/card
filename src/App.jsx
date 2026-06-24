import { useEffect, useState } from "react";
import AppRoutes from "./config/router";

function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      setScale(vw < 794 ? vw / 794 : 1);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const isMobile = scale < 1;

  return (
    <div
      style={
        isMobile
          ? {
              width: "100%",
              height: `${1234 * scale}px`, // ← MUST multiply by scale
              overflow: "hidden",
            }
          : {
              display: "flex",
              justifyContent: "center",
            }
      }
    >
      <div
        style={{
          width: "794px",
          height: "1234px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
          transform: isMobile ? `scale(${scale})` : "none",
          transformOrigin: "top left",
          overflow: "hidden",
        }}
        className="p-3"
      >
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;