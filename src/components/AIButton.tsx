import React, { useEffect, useRef, useState } from "react";
import AiIcon from "@/assets/AIButton.svg";
import { createRoot } from "react-dom/client";
import "~/src/index.css";
import AIReplyModal from "./AIReplyModal";

const DemoCom = () => {
  const [showModal, setShowModal] = useState(false);

  // fetch textbox using queryselector
  const getTextBox = () => document.querySelector(".msg-form__contenteditable") as HTMLElement;

  // handle focus and blur event according user interaction
  useEffect(() => {
    const intervalId = setInterval(() => {
      const textBox = getTextBox();
      if (textBox) {
        textBox.addEventListener("focus", handleFocus);
        textBox.addEventListener("blur", handleBlur);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleFocus = () => {
    const textBox = getTextBox();

    if (textBox) {

      const container = document.createElement("div");
      container.className = "ai-icon-container";
      container.style.cssText =
        "position: absolute; right:4px; bottom:4px; z-index:10;";
      textBox.appendChild(container);

      // Show Ai Icon using render method
      const root = createRoot(container);
      root.render(
        <img
          src={AiIcon} 
          alt="ai"
          className="w-14 h-14 cursor-pointer"
          onClick={() => {setShowModal(true)}}
        />
      );
    }
  };

  const handleBlur = () => {
    const textBox = getTextBox();
    const container = textBox?.querySelector(".ai-icon-container");
    container?.remove();
  };

  return (
    <>
      {showModal && (
        <AIReplyModal open={showModal} close={() => setShowModal(false)} />
      )}
    </>
  );
};

export default DemoCom;
