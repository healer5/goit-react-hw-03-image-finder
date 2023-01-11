import PropTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, tags, onSelect, largeImg }) => {
  return (
    <GalleryItem
      src={smallImg}
      alt={tags}
      onClick={() => {
        onSelect(largeImg);
      }}
    />
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
