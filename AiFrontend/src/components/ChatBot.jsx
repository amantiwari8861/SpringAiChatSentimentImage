// Chatbot.js
import { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMessage } from "react-icons/ai";
import useAiBackend from "../hooks/useAiBackend";

const ChatBot = () => {
  const { sendMessage } = useAiBackend();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage on first render
    const stored = localStorage.getItem("botMsg");
    return stored
      ? JSON.parse(stored)
      : [{ text: "Hello! How can I help you today?", sender: "bot" }];
  });

  useEffect(() => {
    localStorage.setItem("botMsg", JSON.stringify(messages))
  }, [messages]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  // Basic bot replies
  const getBotReply = async (message) => {
    try {
      const msg = message.toLowerCase();
      if (msg.includes("hi") || msg.includes("hello")) return "Hi there! How can I assist you?";
      else if (msg.includes("how are you")) return "I'm just a bot, but I'm doing great! How about you?";
      else if (msg.includes("bye") || msg.includes("goodbye")) return "Goodbye! Have a great day!";
      else {
        return await sendMessage(message);
      }
    }
    catch (err) {
      console.log(err);
      return "Sorry, I cannot answer that right now. :";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    const botReply = { text: await getBotReply(input), sender: "bot" };
    setMessages((prev) => [...prev, botReply]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat window */}
      {isOpen && (
        <div className="w-96 h-[500px] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl rounded-xl flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-700 to-blue-700 text-white font-bold">
            Chatbot
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 transition"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-xs ${msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl max-w-xs bg-gray-200 text-gray-800 flex items-center space-x-2 animate-pulse">
                  <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-300 flex bg-white">
            <input
              type="text"
              className="flex-1 border rounded-l-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-indigo-600 text-white px-6 rounded-r-xl hover:bg-indigo-700 transition"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      {!isOpen && (
        <button
          className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition transform"
          onClick={toggleChat}
        >
          <AiOutlineMessage size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
