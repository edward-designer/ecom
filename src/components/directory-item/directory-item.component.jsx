import "./directory-item.styles.scss";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <div
      className="directory-item-container"
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
