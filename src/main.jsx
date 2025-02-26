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
    const [hover, setHover] = React.useState(false);
    const clickHandler=(e)=>{
      console.log(e);
      console.log(e.target)
      window.open("https://www.amazon.com/Best-Sellers-Books/zgbs/books", "_blank");
    };
  
    return (
      <div className='book' style={{ boxShadow: hover ? "5px 5px 15px rgba(0, 0, 0, 0.3)" : "3px 3px 10px rgba(0, 0, 0, 0.2)",
        transform: hover ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",}} onMouseEnter={()=>setHover(true)} onMouseLeave={() => setHover(false)}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <button className='btn' style={{
          boxShadow: hover ? "5px 5px 15px rgba(0, 0, 0, 0.3)" : "3px 3px 10px rgba(0, 0, 0, 0.2)",
          transform: hover ? "scale(1.05)" : "scale(1)",
          transition: "all 0.3s ease",
        }} onClick={clickHandler} onMouseEnter={()=>setHover(true)} onMouseLeave={() => setHover(false)}>Buy on Amazon</button>
      </div>
    );
  };
  
 
  const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<BookList  />);