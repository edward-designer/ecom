import "./category-item.styles.scss";

const CategoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <div
      className="category-container"
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
