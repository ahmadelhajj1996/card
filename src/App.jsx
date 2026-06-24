import AppRoutes from "./config/router";
 
function App() {
  return (
    <>
      <div
        style={{
                   maxWidth: "794px", 

          minHeight: "1123px",
          margin: "0 auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
        }}
        className=" p-3"
      >
        <AppRoutes />
      </div>

  
    </>
  );
}

export default App;
