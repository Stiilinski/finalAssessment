import React from 'react'

const Citizen = ({ index, id, name, age, address, status, toggleStatus }) => {
  const handleClick = () => {
    toggleStatus(id)
  }

  return (
    <li>
      <div className="citizensList">
        <div className="boxContainer">
          <div className="idArea">{id}</div>
          <div className="indexArea">{index + 1}.)</div>
          <div className="nameArea">
            <span>Name:</span> <span>{name}</span>
          </div>
          <div className="ageArea">
            <span>Age:</span> <span>{age}</span>
          </div>
          <div className="addressArea">
            <span>Address:</span> <span>{address}</span>
          </div>
          <div className="statusArea">
            <span>Status:</span> <span>{status}</span>
          </div>
          <div className="btnArea">
            <button onClick={handleClick}>Toggle Status</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Citizen
