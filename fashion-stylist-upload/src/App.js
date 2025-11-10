import React, { useState, useRef } from "react";

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [context, setContext] = useState("");
  const fileInputRef = useRef();

  // Handle file selection & preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  // Handle drag and drop events
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }
    // Placeholder: process submission (e.g., call backend API)
    console.log("Submitting upload:");
    console.log("Image file:", imageFile);
    console.log("Context:", context);

    // You can reset fields if needed:
    // setImageFile(null);
    // setPreviewUrl(null);
    // setContext("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Fashion Stylist - Upload Your Clothing Image</h1>

      <form onSubmit={handleSubmit}>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            border: "2px dashed #aaa",
            padding: "30px",
            textAlign: "center",
            cursor: "pointer",
            marginBottom: "20px",
            borderRadius: "10px",
            backgroundColor: "#fafafa",
          }}
          onClick={() => fileInputRef.current.click()}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }}
            />
          ) : (
            <p>Drag and drop an image here, or click to select a file</p>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>

        <label>
          Optional outfit context:
          <input
            type="text"
            value={context}
            placeholder='e.g., "casual streetwear"'
            onChange={(e) => setContext(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              marginBottom: "20px",
              fontSize: "16px",
            }}
          />
        </label>

        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;