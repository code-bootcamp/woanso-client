import { useQueryFetchUser } from "../../../commons/hooks/queries/useQueryFetchUser";

export default function LoginSuccess() {
  const { data } = useQueryFetchUser();
  return <></>;
}
