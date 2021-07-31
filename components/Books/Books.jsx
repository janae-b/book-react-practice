import React from 'react';
import './Books.css'

const Books = (props) => {
  return (
    <div className='Books'>
      {props.bookNo.map((book, idx) => 
      <img
      src={props.selectedBookIdx === idx ?
      'image1' :
      'image2'}
      alt=''
      height='100'
      key={book}
      />
      )}
    </div>
  )
}

export default Books;