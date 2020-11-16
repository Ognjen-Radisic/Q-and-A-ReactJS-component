import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ id, title, info }) => {
  const [moreText, setMoreText] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setMoreText(!moreText)}>
          {moreText ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {moreText ? <p>{info}</p> : <></>}
    </article>
  )
}

export default Question
