import { Heading, Button as NativeBaseButton, IButtonProps } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      h={14}
      w="full"
      bg="green.700"
      rounded="sm"
      // fontSize="sm"
      _pressed={{
        bg: "green.500"
      }}
      {...rest}
    >
      <Heading
        color="white"
        fontSize="sm"
      >
        {title}
      </Heading>
    </NativeBaseButton>
  )
};