import React, { useState } from "react";
import UploadPage from "./pages/UploadPage";
import LoadingPage from "./pages/LoadingPage";
import ResultsPage from "./pages/ResultsPage";
import MyWardrobePage from "./pages/MyWardrobePage";


import "./App.css";  // Import your stylesheet

function App() {
  const [page, setPage] = useState("upload");
  const [imageFile, setImageFile] = useState(null);
  const [results, setResults] = useState(null);

  const goBack = () => setPage("upload");

  const handleUpload = (file) => {
    setImageFile(file);
    setPage("loading");

    // Simulate backend call
    setTimeout(() => {
      const fakeResults = {
        inputImage: URL.createObjectURL(file),
        colors: ["black", "white"],
        style: "streetwear",
        vibe: "minimalist",
        matches: [
          {
            name: "White Sneakers",
            style: "Clean minimalist",
            description: "Perfect contrast for darker tops.",
            image:
              "https://images.unsplash.com/photo-1528701800489-20be9f63f14a",
          },
          {
            name: "Oversized Hoodie",
            style: "Cozy streetwear",
            description: "Neutral tone matches bold bottoms.",
            image:
              "https://images.unsplash.com/photo-1600185365483-26d7a4f7e2a1",
          },
        ],
      };

      setResults(fakeResults);
      setPage("results");
    }, 1500);
  };

  return (
    <div className="App-dark">
      <div className="backgroundOverlay" />

      <div className="fadeIn" style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 700 }}>
        {page === "upload" && (
          <UploadPage onUpload={handleUpload} goToWardrobe={() => setPage("wardrobe")} />
        )}
        {page === "loading" && <LoadingPage />}
        {page === "results" && <ResultsPage results={results} onBack={goBack} />}
      </div>
    </div>
  );
}

export default App;