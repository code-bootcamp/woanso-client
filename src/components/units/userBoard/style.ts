import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 100px;
  display: flex;
`;

export const BoxWrapper = styled.div`
`

export const BoxButtonWrapper = styled.div`
display: flex;
gap: 15px;
margin-bottom: 10px;
`

export const BoxButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
`

export const PageTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-left: 5px;
  padding-bottom: 10px;
`;

export const BoxTitle = styled.div`
  font-weight: 500;
  width: 220px;
  /* color: #ffffff; */
  background-color: #ddd;
  padding: 5px 30px;
  border-radius: 4px;
  text-align: left;
`;

export const BoxSearch = styled.input`
  border: 1px solid gray;
  color: #000;
  /* background-color: #f4efe4; */
  padding: 5px 30px;
  margin: 10px 0;
  width: 220px;
  border-radius: 4px;
`;

export const BoxUserList = styled.div`
text-align: center;

`

export const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-left: 30px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableRow2 = styled.tr`
  :nth-child(2n) {
    /* background-color: #f4efe4; */
  }

  :nth-child(2n - 1) {
    background-color: #ddd;
  }
`;

export const TableHead = styled.th`
  padding: 8px 20px;
`;

export const TableDaata = styled.td`
  padding: 8px 20px;
`;

export const UserStatus = styled.div`
  /* background-color: #7a3831eb;
  color: #ffffff;
  margin-right: 15px;
  padding: 3px 10px;
  border-radius: 4px;
  cursor: pointer; */
`;

export const Text = styled.span``;
