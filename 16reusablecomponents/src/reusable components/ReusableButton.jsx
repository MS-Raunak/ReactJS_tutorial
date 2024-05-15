import React from 'react'

function ReusableButton({text, onclick}) {
  return (
    <>
      <button onClick = {onclick}>{text}</button>
    </>
  )
}

export default ReusableButton
