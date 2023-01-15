import styled from "@emotion/styled";
import { debounce } from "lodash";
import { ChangeEvent, useState } from "react";

const SearchInput = styled.input`
  width: 100%;
  color: #000;
  background-color: #f4efe4;
  padding: 5px 15px;
  margin: 10px 0;
  border: none;
`;

export default function Search(props: any) {
  const [isSearch, setIsSearch] = useState(false);

  const getDebounce = debounce((value) => {
    void props.setUsername(value);
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearch(true);
    getDebounce(e.currentTarget.value);
  };

  return (
    <SearchInput
      type="text"
      placeholder={props.text}
      onChange={onChangeSearch}
    />
  );
}
