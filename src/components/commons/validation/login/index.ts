import * as yup from "yup";

export const schema_login = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "정확한 이메일을 입력하세요."
    ),

  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 입니다."
    ),
});
