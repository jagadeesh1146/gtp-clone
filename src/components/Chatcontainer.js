import React, { useState } from 'react'
import Header from './Header'
import Chatmesseages from './Chatmesseages'
import Chatinput from './Chatinput'

const Chatcontainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "hi how are you",
      sender: "ai",
    },
  ])

  const [loading , setLoading] = useState(false)

 const handleSend = async (text) => {
  const userMessage = {
    id: Date.now(),
    text,
    sender: "user",
  }

  setMessages((prev) => [...prev, userMessage])
  setLoading(true)

  try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
      }),
    })

    const data = await response.json()

    const aiMessage = {
      id: Date.now() + 1,
      text: data.reply,
      sender: "ai",
    }

    setMessages((prev) => [...prev, aiMessage])
    setLoading(false)

  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}

  return (
    <div className="flex-1 flex flex-col h-screen bg-white">
      <Header />

      <div className="flex-1 overflow-y-auto px-6 py-4">
        <Chatmesseages messages={messages} loading={loading} />
      </div>

      <Chatinput onSend={handleSend} />
    </div>
  )
}

export default Chatcontainer