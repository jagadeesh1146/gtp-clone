import React, { useState } from 'react'

const Chatinput = ({ onSend }) => {
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return;

    onSend(input)
    setInput("")
  }

  return (
    <div className="border-t bg-white p-4">
      <div className="max-w-4xl mx-auto flex items-center gap-3 bg-gray-100 rounded-3xl px-4 py-3 shadow-sm">
        <input
          type="text"
          placeholder="Message GPT..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-transparent outline-none text-lg"
        />

        <button
          onClick={handleSend}
          className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ↑
        </button>
      </div>
    </div>
  )
}

export default Chatinput