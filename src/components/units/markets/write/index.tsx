import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormType {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  images: string;
  zipcode: string;
  address: string;
}

export default function MarketsWrite() {
  const ReactQuill = dynamic(async () => await import("react-quill"));

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // setValue,
    // trigger,
  } = useForm<IFormType>({
    mode: "onChange",
    // resolver: yupResolver(schema)
  });
  return <></>;
}
