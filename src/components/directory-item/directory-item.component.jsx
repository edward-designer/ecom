import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  H2,
  P,
} from "./directory-item.styles";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <DirectoryItemContainer to={`/shop/${title}`}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Body>
        <H2>{title.toUpperCase()}</H2>
        <P>Shop Now</P>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
