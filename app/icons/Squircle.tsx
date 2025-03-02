import React from 'react'

interface SquircleProp{
  color:string
  insideIcon:React.ReactNode
}

const Squircle = ({color,insideIcon}:SquircleProp) => {
  return (
    <svg overflow="visible" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 30.316C0 5.35077 5.35077 0 30.316 0H34.684C59.6492 0 65 5.35077 65 30.316V34.684C65 59.6492 59.6492 65 34.684 65H30.316C5.35077 65 0 59.6492 0 34.684V30.316Z" fill={color} />
<g transform="translate(20, 20)">
        <foreignObject width="25" height="25" z="2"  >
          {insideIcon} 
        </foreignObject>
      </g>
</svg>

  )
}

export default Squircle