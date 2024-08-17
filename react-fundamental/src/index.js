import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './book';

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

//complex component with wrapper
/* const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
    
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = ({ imgVar, title, author, getBook, id }) => {
  // console.log('imgVar', imgVar, 'title', title, 'author', author);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className='book'>
      <img src={imgVar} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Display Title</button>
      <h4>{author}</h4>
    </article>
  );
}; */

//Prop drilling -> Values can be passed from parent to the chilc
/* const BookList = () => {
  const someValue = 'shakeAndBake';
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

const Book = ({ imgVar, title, author, displayValue }) => {
  // console.log('imgVar', imgVar, 'title', title, 'author', author);
  
  return (
    <article className='book'>
      <img src={imgVar} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Display Title</button>
      <h4>{author}</h4>
    </article>
  );
}; */

//Object as a prop
/* const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ imgVar, title, author }) => {
  console.log('imgVar', imgVar, 'title', title, 'author', author);
  return (
    <article className='book'>
      <img src={imgVar} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}; */

//Form submission with various approaches.
/* const EventExamples = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    alert('form submitted');
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='txtName'
          id='txtName'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit' onClick={handleFormSubmission}>
          Submit
        </button>
        <div>
          <button
            onClick={() => {
              alert('Handle button click');
            }}
            type='button'
          >
            Click me
          </button>
        </div>
      </form>
    </section>
  );
};
 */
// Prop setup with key prop
/* const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { imgVar, title, author, id } = book;
        return (
          <Book
            imgVar={imgVar}
            title={title}
            author={author.toUpperCase()}
            key={id}
          />
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { imgVar, title, author } = props;
  return (
    <article className='book'>
      <img src={imgVar} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}; */

// Prop setup with multiple approaches
/* const firstBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  imgVar: './images/image1.jpg',
};
const secondBook = {
  author: 'Francesc Miralles',
  title: 'Ikigai',
  imgVar:
    'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL600_SR600,400_.jpg',
}; */

/* This paragraph and button will be rendered through the children props */
/* const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author.toUpperCase()}
        imgVar={firstBook.imgVar}
        title={firstBook.title}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          aspernatur ab magni, nam numquam natus molestiae dolores repellendus
          earum, veniam laborum doloribus quis in neque quae provident eius, et
          illum?
        </p>
        <button>Click me</button>
      </Book>
      <Book
        author={secondBook.author.toUpperCase()}
        imgVar={secondBook.imgVar}
        title={secondBook.title}
      />
    </section>
  );
}; */

// This is using children props
/* const Book = ({ imgVar, title, author, children }) => {
  console.log(imgVar, title, author, children);
  return (
    <article className='book'>
      <img src={imgVar} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
}; */

// This is second approach using destructing object.
/* const Book = ({ imgVar, title, author }) => {
  console.log(imgVar, title, author);
  return (
    <article className='book'>
      <img src={imgVar} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}; */

// This is one approach using props destructuring object.
/* const Book = (props) => {
  const { imgVar, title, author } = props;
  console.log(imgVar, title, author);
  return (
    <article className='book'>
      <img src={imgVar} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}; */

// Prop setup more dynamic way
/* const firstBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  imgVar: './images/image1.jpg',
};
const secondBook = {
  author: 'Francesc Miralles',
  title: 'Ikigai',
  imgVar:
    'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL600_SR600,400_.jpg',
};
const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author.toUpperCase()}
        imgVar={firstBook.imgVar}
        title={firstBook.title}
      />
      <Book
        author={secondBook.author.toUpperCase()}
        imgVar={secondBook.imgVar}
        title={secondBook.title}
      />
    </section>
  );
}; */

//Prop setup more dynamic way
/* const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.imgVar} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {The values which are passed through props can be implemented like this as well, the arguments which are passed through components, same parameter names should be used}
      {<p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>}
      {This is another way to console log}
      {{console.log(props)}}
    </article>
  );
}; */

// Props Basic Setup
/* const author = 'James Clear';
const title = 'Atomic Habits';
const imgVar = './images/image1.jpg';
const BookList = () => {
  return (
    <section className='booklist'>
      <Book author={author} imgVar={imgVar} title={title} />
      <Book author={author.toUpperCase()} imgVar={imgVar} title={title} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  // The values which are passed through props can be implemented like this as well, the arguments which are passed through components, same parameter names should be used
  return (
    <article className='book'>
      <img src={props.imgVar} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
      This is another way to console log
      {console.log(props)}
    </article>
  );
}; */

// Book List through JSX rules
/* const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const author = 'James Clear';
const Book = () => {
  const title = 'Atomic Habits';
  return (
    <article className='book'>
      <img src='./images/image1.jpg' alt='Atomic Habits' />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
}; */

//Book List with nested Components and inline CSS through jsx
/* const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src='./images/image1.jpg' alt='Atomic Habits' />;
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>James Clear</h4>;
}; */

// Nest Component
/* function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Vishal Kumar Khatri</h2>;
const Message = () => {
  return <p>This is my text message</p>;
}; */
// Fourth Component
/* function Greeting() {
  return (
    <>
      <div>
        <h3>Hello People</h3>
        <ul>
          <li>
            <a href='#'>Hello World</a>
          </li>
        </ul>
      </div>
      <h2>Hello World</h2>
    </>
  );
} */

// Third Component
/* We can use either use react.fragment for rendering in React, for shorthand you can use the above method */
/* function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h3>Hello People</h3>
        <ul>
          <li>
            <a href='#'>Hello World</a>
          </li>
        </ul>
      </div>
      <h2>Hello World</h2>
    </React.Fragment>
  );
} */

// first Component
/* function Greeting() {
  return (
    <div>
      <h2>My First Component</h2>
    </div>
  );
} */

//Second Component
/* function Greeting() {
  return React.createElement('h2', {}, 'Vishal');
} */

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Greeting />);
root.render(<BookList />);
