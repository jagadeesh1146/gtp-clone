import React from 'react'

const Header = () => {
  return (
    <div className="w-full h-12 bg-gray-300 border rounded-sm flex items-center justify-between py-4">
        <h1 className="my-1 mx-2 px-2 py-1 text-lg font-bold"> GPT</h1>

        <img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
        alt="GPT Logo"
        className="w-8 h-8"
      />

    </div>
  )
}

export default Header