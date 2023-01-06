import * as yup from "yup";

export const schema_join = yup.object({
  nickname: yup.string().max(8).required("닉네임을 입력해주세요"),
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(8, "영문+숫자 특수문자 조합 8~16자리를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "영문+숫자 특수문자 조합 8~16자리를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요"),
  phone: yup
    .number()
    .required("핸드폰 번호를 입력해주세요.")
    .typeError("숫자만 입력해주세요."),
});
