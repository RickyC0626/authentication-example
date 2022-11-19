import tw from "tailwind-styled-components";

export const StyledForm = tw.form`
  w-72 h-fit p-6 rounded-md
  bg-white/25 backdrop-blur-sm text-white
  grid grid-cols-1 gap-5 sm:w-80
`;

export const StyledFormTitle = tw.h2`
  text-center text-2xl font-semibold sm:text-3xl
`;

export const StyledFormDivider = tw.div`
  h-[1px] w-5/6 bg-white/25 m-auto
`;

export const StyledFormFieldSection = tw.div`
  grid gap-1
`;

export const StyledFormFieldInput = tw.input`
  w-full h-10 p-2 bg-transparent rounded-md border-2 border-white/50
  focus-visible:outline-none valid:focus-visible:border-green-300
  invalid:focus-visible:border-red-300 placeholder:text-white/50
`;

export const StyledFormFieldLabel = tw.label`
  font-semibold
`;

export const StyledFormButtonSection = tw.div`
  flex gap-6 m-auto
`;

export const StyledFormSubmitButton = tw.input`
  px-4 py-2 rounded-md bg-white/20 font-semibold cursor-pointer
  hover:outline outline-2 outline-white
`;

export const StyledFormButton = tw.button`
  px-4 py-2 rounded-md bg-white/20 font-semibold cursor-pointer
  hover:outline outline-2 outline-white
`;