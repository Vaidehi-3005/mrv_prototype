import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: "9999",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          background: "#000000",
          color: "#ffffff",
          cursor: "pointer",
          
          // Smooth depth shadow
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25), 0 2px 5px rgba(0, 0, 0, 0.15)",
          
          // Clean hover transition
          transition: "transform 0.2s ease, background-color 0.2s ease",
        }}
        // Small interactive zoom effect on hover
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.backgroundColor = "#1a1a1a";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "#000000";
        }}
        aria-label="Scroll to top"
      >
        {/* Bold SVG Arrow */}
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3.5" // Controls the thickness/boldness
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    )
  );
};

export default ScrollToTopButton;