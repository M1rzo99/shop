import { childProps } from "@/types";
import { FC } from "react";
const AuthLayout: FC<childProps> = ({ children }) => {
    return  <section className="flex justify-center mt-44">{children}</section>
}
export default AuthLayout;
//NOTE - layout.tsx sign in/ sign up pagelarni o'z ichiga oladi.