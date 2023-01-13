import styled from "@emotion/styled";
import { ExclamationCircleFilled } from "@ant-design/icons";

const Icon = styled(ExclamationCircleFilled)`
  font-size: 0.75rem;
  color: #f00001;
  margin-right: 3px;
`;

const Error = styled.div`
  font-size: 0.75rem;
  color: #f00001;
  padding: 10px 0 10px 10px;
  text-align: left;
`;

export default function ErrMessage({ text }: any) {
  return <Error>{text}</Error>;
}
