'use client';

import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: `You said: "${input}"` }; // Replace with actual logic or API call

    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        {isOpen ? '−' : '💬'}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="mt-2 w-80 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 text-blue-500">Chatbot Assistant</h2>
          <div className="h-60 overflow-y-auto border rounded p-2 mb-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-200' : 'bg-gray-300'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-grow border rounded-l px-2 py-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded-r"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;