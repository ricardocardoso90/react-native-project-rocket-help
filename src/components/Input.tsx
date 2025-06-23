import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      h={14}
      size="md"
      bg="gray.700"
      fontSize="md"
      borderWidth={0}
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...rest}
    />
  )
};