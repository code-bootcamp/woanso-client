import * as yup from "yup";

// 회원가입시
export const schema_join = yup.object({
  nickname: yup.string().max(8).required("⚠ 닉네임을 입력해주세요"),
  email: yup
    .string()
    .email()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "⚠ 이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("⚠ 이메일을 입력해주세요"),
  password: yup
    .string()
    .min(8, "⚠ 영문+숫자 특수문자 조합 8~16자리를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "영문+숫자 특수문자 조합 8~16자리를 입력해주세요."
    )
    .required("⚠ 비밀번호를 입력해주세요"),
  phone: yup
    .number()
    .required("⚠ 핸드폰 번호를 입력해주세요.")
    .typeError("⚠ 숫자만 입력해주세요."),
});

// 로그인시
export const schema_login = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "⚠ 잘못된 이메일 주소입니다."
    ),

  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "⚠ 비밀번호는 영문, 숫자, 특수문자를 포함한 8자 입니다."
    ),
});

// 비밀번호 찾기시
export const schema_find = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "⚠ 잘못된 이메일 주소입니다."
    ),
});
