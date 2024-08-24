const PageLink = ({ href, itemClass, displayText }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {displayText}
      </a>
    </li>
  );
};
export default PageLink;
