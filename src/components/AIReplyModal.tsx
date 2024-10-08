import React, { useEffect, useState } from "react";
import generateIcon from "@/assets/GenerateIcon.png";
import RegenerateIcon from "@/assets/RegenerateIcon.png";
import InsertIcon from "@/assets/InsertIcon.png";
import Button from "./Button";

const AIReplyModal = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<  
    { text: string; sender: "user" | "ai" }[]
  >([]);  // store messages in array so we can easily fatch and modify

  const [response, setResponse] = useState(
    "Thank you for the opportunity! If you have any more questions, feel free to ask."
  );

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // set user message and Ai generated message  
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: "user" },
      { text: response, sender: "ai" },
    ]);

    setInputValue("");
  };

  const handleInsert = () => {
    const placeHolder = document.querySelector(".msg-form__placeholder");
    placeHolder?.remove();

    const textbox = document.querySelector(".msg-form__contenteditable");
    if (textbox) {
      textbox.textContent = response;

      // remove disabled attribute in send button
      const sendBtn = document.querySelector(".msg-form__send-button");
      sendBtn?.removeAttribute("disabled");
    }
    close();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 z-20 flex items-center justify-center"
      onClick={close}
    >
      <div
        className="bg-zinc-100 rounded-xl p-6 lg:w-[40%] xl:w-[30%] md:w-[60%] w-[80%] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-2 pb-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                } max-w-[70%] rounded-lg p-3`}
              >
                <span>{message.text}</span>
              </div>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Your prompt"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-2 w-full px-2 py-6 h-16 flex bg-white border-none outline-none rounded-lg focus:outline-none hover:outline-none focus:border-none hover:border-none  active:border-none active:outline-none"
        />
        <div className="flex flex-row justify-end justify-items-end mt-6 space-x-4 items-end">
          {messages.length != 0 ? (
            <>
              <Button 
                onClick={handleInsert}
                icon={InsertIcon}
                iconSize={'w-5'}
                label="Insert"
                className="bg-white text-zinc-600 py-[4px]"
                style={{ border: '1px solid #C0C0C0' }}
              />
              <Button
                onClick={() => {}}
                icon={RegenerateIcon}
                iconSize={'w-5'}
                label="Regenerate"
                className="bg-blue-500 text-white"
              />
            </>
          ) : (
            <>
              <Button
                onClick={handleSendMessage}
                icon={generateIcon}
                iconSize={'w-6'}
                label="Generate"
                className="bg-blue-500 text-white"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIReplyModal;
