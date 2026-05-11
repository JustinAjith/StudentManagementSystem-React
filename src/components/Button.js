import React from 'react'

export default function Button({ type='submit', onClick, isDisabled=false, label }) {
  return (
    <button type={type} onClick={onClick} disabled={isDisabled} 
    className="btn px-4 py-2 rounded-3 w-100 shadow-sm gradient-bg text-white">
        {label}
    </button>
  )
}
