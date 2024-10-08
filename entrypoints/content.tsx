import AIButton from "@/src/components/AIButton";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";


export default defineContentScript({
  matches: ['https://www.linkedin.com/*'],
  async main() {

    console.log("Hello define content Script =====>");
    
    const container = document.createElement("div");
    container.id = "react-root";
    document.body.appendChild(container);

    const root = createRoot(container);  
    root.render(<AIButton />);
  },
});