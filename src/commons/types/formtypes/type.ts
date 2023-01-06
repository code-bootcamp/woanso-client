// 로그인 form type
export interface ILoginFormType {
  email: string;
  password: string;
}

// 회원가입 form type + 회원 정보 수정 from type
export interface IUserFormType {
  nickname: string;
  email?: string;
  password: string;
  password2: string;
  phone: number;
  interest?: string;
}
