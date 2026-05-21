import React from 'react'

const Chatmesseages = ({messages , loading}) => {
  return (
    <div className="space-y-3">
        {
            messages.map((message)=>(
                <div
                key={message.id}
                className={` w-fit rounded mx-2 px-2 py-2 max-w-xl
                    ${message.sender === 'user'?"ml-auto text-white bg-black" : 
                        "mr-auto bg-slate-200 text-black"}`}
                >
                    {message.text}

                </div>
            ))}
            {
                loading && 
                <div className="w-fit rounded mx-2 px-4 py-2 bg-gray-200 text-black mr-auto ">
                    Thinking...
                    </div>
            }
        

    </div>
  )
}

export default Chatmesseages