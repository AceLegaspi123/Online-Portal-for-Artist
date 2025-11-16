import React from 'react'


const ThreeColTable = ({title, children} : {children?: React.ReactNode, title: string}) => {
  return (
    <div>
      <h2>{title}</h2>
      <table>

      </table>
    </div>
  )
}

export default ThreeColTable
