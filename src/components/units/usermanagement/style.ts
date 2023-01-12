import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 180px 100px;
`;

export const PageTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-left: 5px;
  padding-bottom: 10px;
`;

export const BoxTitle = styled.div`
  font-weight: 500;
  width: 100%;
  color: #ffffff;
  background-color: #7a3831eb;
  padding: 5px 30px;
  border-radius: 4px;
  text-align: left;
`;

export const BoxSearch = styled.input`
  width: 100%;
  color: #000;
  background-color: #f4efe4;
  padding: 5px 30px;
  margin: 10px 0;
  border: none;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
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

export const UserStatus = styled.button`
  background-color: #7a3831eb;
  color: #ffffff;
  margin-right: 15px;
  padding: 3px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Text = styled.span``;
