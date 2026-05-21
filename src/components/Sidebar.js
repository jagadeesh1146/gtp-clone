import React, { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={`h-screen bg-gray-200 border-r transition-all duration-300 overflow-hidden
        ${isOpen ? "w-[337px] p-4" : "w-[80px] p-2"}
      `}
    >
      <div
        className={`flex items-center ${
          isOpen ? "justify-between" : "justify-center gap-2"
        }`}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
          alt="logo-gpt"
          className="h-8 w-8"
        />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-2xl"
        >
          {isOpen ? "⬅️" : "➡️"}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="mt-8">
            <h2 className="p-3 rounded-lg hover:bg-gray-300 cursor-pointer">
              New Chat
            </h2>
          </div>

          <div className="mt-4">
            <h2 className="p-3 rounded-lg hover:bg-gray-300 cursor-pointer">
              History
            </h2>
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar