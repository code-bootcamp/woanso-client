import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding-top: 180px;
  width: 760px;
  margin: auto;
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
  padding: 5px 15px;
  border-radius: 4px;
  text-align: left;
`;

export const BoxSearch = styled.input`
  width: 100%;
  color: #000;
  background-color: #f4efe4;
  padding: 5px 15px;
  margin: 10px 0;
  border: none;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
`;

export const Thead = styled.thead`
  font-size: 0.75rem;
`;

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

export const TableData = styled.td`
  padding: 8px 20px;
  font-size: 0.75rem;
`;

export const UserStatus = styled.button`
  background-color: #7a3831eb;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 15px;
  margin-bottom: 3px;
`;

export const UserStatus2 = styled(UserStatus)`
  background-color: #ffffff;
  border: 1px solid #7a3831eb;
  color: #7a3831eb;
  margin-bottom: 0px;
`;

export const Text = styled.span``;
