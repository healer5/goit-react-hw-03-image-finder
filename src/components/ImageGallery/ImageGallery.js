import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery, ImageGalleryItemStyled } from './ImageGallery.styled';

export const ImageGallery = ({ photos, onSelect }) => {
  return (
    <Gallery>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItemStyled key={id}>
            <ImageGalleryItem
              photos={photos}
              onSelect={onSelect}
              smallImg={webformatURL}
              largeImg={largeImageURL}
              tags={tags}
            />
          </ImageGalleryItemStyled>
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;
