import { IconType } from "react-icons";
import tw from "tailwind-styled-components";

export const StyledForm = tw.form<any>`
  w-72 h-fit p-6 rounded-md
  bg-white/25 backdrop-blur-sm text-white
  grid grid-cols-1 gap-3 sm:w-80
`;

export const StyledFormTitle = tw.h2`
  text-center text-2xl font-semibold sm:text-3xl
`;

export const StyledFormDivider = tw.div`
  h-[1px] w-5/6 bg-white/25 m-auto
`;

export const StyledFormFieldSection = tw.div<any>`
  grid gap-1
`;

export const StyledFormFieldInput = tw.input<{ $isValid?: boolean }>`
  w-full h-10 p-2 pl-11 bg-transparent rounded-md border-2 border-white/50
  focus-visible:outline-none placeholder:text-white/50 sm:text-lg sm:h-11 sm:pl-12
  ${(p) => (p.$isValid ? "focus-visible:border-green-300" : "focus-visible:border-red-300")}
`;

export const StyledFormFieldInputIcon = ({ Icon }: { Icon: IconType }) => (
  <Icon className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80 sm:w-7 sm:h-7" />
);

export const StyledFormFieldLabel = tw.label<any>`
  font-semibold sm:text-lg
`;

export const StyledFormButtonSection = tw.div<any>`
  flex gap-6 m-auto
`;

export const StyledFormSubmitButton = tw.button<any>`
  px-4 py-2 rounded-md bg-white/20 font-semibold cursor-pointer
  hover:outline outline-2 outline-white text-center sm:text-lg
`;

export const StyledFormButton = tw.button`
  px-4 py-2 rounded-md bg-white/20 font-semibold cursor-pointer
  hover:outline outline-2 outline-white sm:text-lg
`;