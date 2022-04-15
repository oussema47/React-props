import React from 'react'

const Prof = ({prof, handleName}) => {
  return (
    <div>
      <button const onClick={()=>{handleName(prof.fullName)}}>Click on the button</button>     
      <br />
      <br />
      <h1>{prof.fullName}</h1>
      <br />
      <h3>{prof.profession}</h3>
      <br />
      <h5>{prof.bio}</h5>
    </div>
  )
}

export default Prof