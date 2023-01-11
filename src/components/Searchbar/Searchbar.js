import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;
    onSubmit({ searchQuery });
    e.target.reset();
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <AiOutlineSearch size={24} />
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
