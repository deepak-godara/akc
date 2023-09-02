import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";

const Container = styled.div`
  height: 2.875rem;
  display: flex;
  width: 23rem;
`;
const SearchInput = styled.input`
  display: block;
  flex-shrink: 1;
  height: 100%;
  border-radius: 10px 0 0 10px;
  padding: 0.6563rem 1.25rem;
  padding-right: 0rem;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  min-width: 5rem;
  color: ${(props) => props.theme.colors.gray[800]};
  &::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
  }
`;
const SearchButton = styled.button`
  background: #ffffff;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 0px 10px 10px 0px;
  padding: 0.6563rem 1.25rem;
`;
const SearchButtonIcon = styled(FaMagnifyingGlass)`
  height: 18px;
  width: 18px;
  color: ${(props) => props.theme.colors.gray[800]};
`;
function Search({ placeholder, ...props }: { placeholder: string }) {
  return (
    <Container {...props}>
      <SearchInput placeholder={placeholder} />
      <SearchButton>
        <SearchButtonIcon />
      </SearchButton>
    </Container>
  );
}

export default Search;
