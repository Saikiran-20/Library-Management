
// import React from "react";
// import { useGlobalContext } from "../../context";
// import Loading from "../Loader/Loader";
// import Book from "../BookList/Book";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookList.css";



// const BookList = ()=>{
// const{books,loading,resultTitle} = useGlobalContext();
// const booksWithCover = books.map((singleBook) => {
//     return{
//         ...singleBook,
      
//         id:(singleBook.id).replace("/work/",""),cover_img:singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
//     }
// });

// console.log(booksWithCover);

// if(loading) return <Loading/>;


//     return(
//       <section className="bookList">
//         <div className="container">
//             {/* <div className="row"> */}
//                 {/* <div className="col-4"> */}
//                 <div className="section-title">
//                 <h2>{resultTitle}</h2>
//             </div>
            
//             <div className="bookList-content row justify-content-between align-items-start">
//                 {
//                     booksWithCover.slice(0,30).map((item,index) =>{
//                         return (
//                             <Book key = {index} {...item}/>
//                         )
//                     })
//                 }
//             </div>
//                 {/* </div> */}
//             {/* </div> */}
           
 

//         </div>
//       </section>
//     )
// }
// export default BookList


import React from 'react';
// import { useGlobalContext } from '../../context.';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className='bookList'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='bookList-content row'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList