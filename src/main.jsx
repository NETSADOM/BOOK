import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books'
  const BookList=()=>{
    return(
    <section className='Booklist'>
     {books.map((book)=>{
      return <Book key={book.id} {...book} ></Book>
     })}
     </section>
    );
  }
  const Book=({img,title,author})=>{
    const clickHandler=(e)=>{
      console.log(e);
      console.log(e.target)
      alert('hello world');
    };
    return(
      <article className='book'>
         <img src={img}/> 
          <h1>{title}</h1>
        <h4>{author}</h4>
        <button onClick={clickHandler}>click here</button>
      </article>
    );
  }
  
 
  const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<BookList  />);