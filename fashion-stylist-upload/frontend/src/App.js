import React, { useState, useRef, useEffect } from "react";

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [context, setContext] = useState("");
  const fileInputRef = useRef();

  useEffect(() => {
    // Clean up URL.createObjectURL when component unmounts or image changes
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

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
    console.log("Submitting upload:");
    console.log("Image file:", imageFile);
    console.log("Context:", context);
  };

  // Styles
  const styles = {
    app: {
      fontFamily: "'Poppins', sans-serif",
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #667eea, #764ba2)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "40px 20px",
      boxSizing: "border-box",
    },
    container: {
      maxWidth: "480px",
      margin: "0 auto",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "16px",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      padding: "30px 25px",
      backdropFilter: "blur(8.5px)",
      WebkitBackdropFilter: "blur(8.5px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
    },
    title: {
      fontWeight: "700",
      fontSize: "1.8rem",
      marginBottom: "25px",
      textAlign: "center",
      textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    },
    uploadBox: {
      border: "2.5px dashed rgba(255, 255, 255, 0.7)",
      borderRadius: "12px",
      padding: "25px",
      textAlign: "center",
      cursor: "pointer",
      transition: "border-color 0.3s ease",
      marginBottom: "20px",
      color: "rgba(255, 255, 255, 0.8)",
      userSelect: "none",
      position: "relative",
      minHeight: "180px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    uploadBoxHover: {
      borderColor: "#ffd700",
    },
    uploadImage: {
      maxWidth: "100%",
      maxHeight: "160px",
      objectFit: "contain",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      userSelect: "none",
      transition: "transform 0.3s ease",
    },
    uploadImageHover: {
      transform: "scale(1.02)",
    },
    contextLabel: {
      display: "block",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#f0e9ff",
      textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      fontSize: "1rem",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.2)",
      marginBottom: "25px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      color: "#fff",
      transition: "background-color 0.3s ease",
    },
    inputFocus: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    button: {
      width: "100%",
      backgroundColor: "#ffd700",
      border: "none",
      padding: "14px 0",
      borderRadius: "12px",
      fontWeight: "700",
      fontSize: "1.1rem",
      color: "#3b1f00",
      cursor: "pointer",
      boxShadow: "0 5px 15px rgba(255,215,0,0.4)",
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#ffea33",
      boxShadow: "0 6px 25px rgba(255,234,51,0.7)",
    },
  };

  // Button hover effect
  const [btnHover, setBtnHover] = useState(false);
  // Upload box hover effect
  const [uploadHover, setUploadHover] = useState(false);

  return (
    <>
      {/* Import Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={styles.app}>
        <div style={styles.container}>
          <h1 style={styles.title}>Fashion Stylist</h1>

          <form onSubmit={handleSubmit}>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current.click()}
              onMouseEnter={() => setUploadHover(true)}
              onMouseLeave={() => setUploadHover(false)}
              style={{
                ...styles.uploadBox,
                ...(uploadHover ? styles.uploadBoxHover : {}),
              }}
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{
                    ...styles.uploadImage,
                    ...(uploadHover ? styles.uploadImageHover : {}),
                  }}
                  draggable={false}
                />
              ) : (
                <p>Drag & drop an image here, or click to select a file</p>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>

            <label style={styles.contextLabel} htmlFor="context">
              Optional outfit context:
            </label>
            <input
              id="context"
              type="text"
              value={context}
              placeholder='e.g., "casual streetwear"'
              onChange={(e) => setContext(e.target.value)}
              style={styles.input}
              onFocus={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")
              }
              onBlur={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)")
              }
            />

            <button
              type="submit"
              style={{ ...styles.button, ...(btnHover ? styles.buttonHover : {}) }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;