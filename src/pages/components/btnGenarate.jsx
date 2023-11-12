import React from 'react'

export default function btnGenarate({ text, className, type, onclick }) {
  return (
    <button type={type} onclick={onclick} className={`${className}`}>{text}</button>
  )
}
