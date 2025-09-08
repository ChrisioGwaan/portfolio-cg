'use client';

import React, { useState } from 'react';
import { LuMessageSquare, LuX } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBotPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a helpful assistant.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      const data = await res.json();
      const reply = data?.choices?.[0]?.message;
      if (reply && reply.content) {
        setMessages(prev => [...prev, reply]);
      } else {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: 'Sorry, I could not process your request.' },
        ]);
      }
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'An error occurred. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-[#8cfa9e] border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        title="Chat"
      >
        <LuMessageSquare size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-5 w-[24rem] h-[34rem] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl flex flex-col overflow-hidden z-50"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-[#8cfa9e] text-black font-semibold">
              <span>🍵Ask me anything (Beta)</span>
              <button
                onClick={() => setOpen(false)}
                className="text-black hover:text-red-500"
                title="Close"
              >
                <LuX size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2">
              {messages.slice(1).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <span
                    className={`max-w-[80%] px-3 py-2 rounded-lg break-words ${
                      msg.role === 'user'
                        ? 'bg-[#8cfa9e] text-black'
                        : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
                    }`}
                  >
                    {msg.content}
                  </span>
                </div>
              ))}
              {loading && <p className="text-gray-500 text-xs">Thinking...</p>}
            </div>

            <div className="p-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-l-md bg-gray-50 dark:bg-gray-700 text-sm outline-none"
                placeholder="Ask me anything..."
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-[#8cfa9e] text-black text-sm rounded-r-md hover:bg-[#74e686] transition disabled:opacity-50"
                disabled={loading}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
