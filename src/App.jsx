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

  return (
    // ← Outer wrapper: clips overflow and sets the visible height
    <div
      style={{
        width: "100%",
        height: `${1123 * scale}px`,   // shrinks the occupied height too
        overflow: "hidden",
      }}
    >
      {/* ← Inner A4 page: always 794px wide, scaled down visually */}
      <div
        style={{
          width: "794px",
          minHeight: "1123px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",  // ← key: anchor to left, not center
        }}
        className="p-3 shadow-md"
      >
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
