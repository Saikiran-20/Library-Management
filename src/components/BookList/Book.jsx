// import React from "react";
// import { Link } from 'react-router-dom';
// import "./BookList.css";

// // const Book = ({ cover_img, id, title, author, edition_count, first_publish_year }) => {
//     const Book =(book) =>{
//   return (
//     <div className="col-3 h-100" style={{"height":"100%"}}>
//     <div className="book-item flex flex-column flex-sb ">
//       <div className=" book-item-img ">
//         <img src={book.cover_img} alt="cover" />
//       </div>
//       <div className=" book-item-info text-center">
//         <Link to={`/bookDetail/${book.id}`} {...book}>
//           <div className="book-item-info-item title fw-7 fs-18">
//             <span>{book.title}</span>
//           </div>
//         </Link>
//         <div className="book-item-info-item author fs-15">
//           <span className="text-capitalize fw-7">Author:</span>
//           <span>{book.author}</span>
//         </div>
//         <div className="book-item-info-item -edition-count fs-15">
//           <span className="text-capitalize fw-7">Total Editions:</span>
//           <span>{book.edition_count}</span>
//         </div>
//         <div className="book-item-info-item- publish-year fs-15">
//           <span className="text-capitalize fw-7">First Publish Year:</span>
//           <span>{book.first_publish_year}</span>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Book;

import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className="col-4 p-3">
    <div className='book-item flex flex-column h-100 flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Book