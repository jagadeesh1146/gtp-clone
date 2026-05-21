import React from 'react'
import Sidebar from './Sidebar'
import Chatcontainer from './Chatcontainer'

const Maincontainer = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <Chatcontainer />
    </div>
  )
}

export default Maincontainer