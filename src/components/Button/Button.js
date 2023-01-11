import PropTypes from 'prop-types';
import { ButtonGallery } from './Button.styled';

export const Button = ({ title, onClick }) => {
  return (
    <ButtonGallery type="button" onClick={onClick}>
      {title}
    </ButtonGallery>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
