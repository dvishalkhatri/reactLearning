const Book = ({ imgVar, title, author, number }) => {
  console.log(imgVar, title, author, number);
  return (
    <article className='book'>
      <img src={imgVar} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className='number'>{`# ${number + 1}`}</span>
    </article>
  );
};
export default Book;
