import React from 'react'
import './BookSelector.css'

const BookSelector = (props) => {
  return (
    <div className='BookSelector'>
        {props.bookNo.map((book, idx) => 
          <button 
            key={book}
          >
          {props.selectedBookIdx === idx ? `Book ${idx + 1} Selected` : `Select Book ${idx + 1}`}
          </button>
        )}
    </div>
  )
}

export default BookSelector