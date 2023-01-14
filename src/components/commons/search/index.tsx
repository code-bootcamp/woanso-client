import { ContactsOutlined } from "@ant-design/icons";
import { debounce } from "lodash";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  width: 100%;
  color: #000;
  background-color: #f4efe4;
  padding: 5px 30px;
  margin: 10px 0;
  border: none;
`;

export default function Search(props: any) {
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const getDebounce = debounce((value) => {
    void props.refetch({ search: value, page: 1 });
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearch(true);
    setKeyword(e.currentTarget.value);
    getDebounce(e.currentTarget.value);
  };

  return (
    <SearchInput
      type="text"
      placeholder="찾으시는 상품을 검색하세요."
      onChange={onChangeSearch}
    />
  );
}
