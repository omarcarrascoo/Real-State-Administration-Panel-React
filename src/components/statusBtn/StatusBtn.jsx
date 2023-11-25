import React from 'react'
import './statusBtn.css'
function StatusBtn() {
  return (
    <label className="switch">
        <input type="checkbox" checked/>
        <span className="slider round"></span>
    </label>

  )
}

export default StatusBtn
