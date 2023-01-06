import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("제목을 입력해주세요."),
  deliveryFee: yup.number().required("배송비를 입력해주세요."),
  rentalFee: yup.number().required("대여비를 입력해주세요."),
});
