// 로그인 form type
export interface ILoginFormType {
  email: string;
  password: string;
}

// 회원가입 Form type + 비밀번호 찾기 From type
export interface IUserFormType {
  nickname?: string;
  email?: string;
  password: string;
  password2: string;
  phone: number;
  interest?: string;
}

// 회원 정보 수정 From type
export interface IUserUpdateFormType {
  nickname?: string;
  email?: string;
  phone: number;
  interest?: string;
}

// 주문하기 Form type
export interface IOrderFormType {
  adress: string;
}

// 관리자 회원가입 Form type
export interface IAdminFormType {
  nickname?: string;
  email?: string;
  password: string;
  password2: string;
  phone: number;
}
