import React from "react"

function Container({children}) {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="relative bg-gray-50 lg:w-full">
          {children}
        </div>
    </div>
  )
}

export default Container
