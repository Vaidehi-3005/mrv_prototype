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
          padding: "12px",
          borderRadius: "50%",
          border: "none",
          background: "#000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;