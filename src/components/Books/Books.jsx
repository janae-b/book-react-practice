import React from 'react';
import './Books.css'

const Books = (props) => {
  return (
    <div className='Books'>
            {props.bookNo.map((book, idx) =>
            <div 
            key={idx}
            className={props.selectedBookIdx === idx ? `selected` : `${idx}`}
            >
            {props.selectedBook === idx ? `${idx + 1}` : `${idx + 1}`}   
            </div>
               )}



               </div>
           )
       }

export default Books;