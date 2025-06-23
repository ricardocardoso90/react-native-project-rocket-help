import { useState } from "react";

import { Envelope, Key } from "phosphor-react-native";
import { Heading, Icon, ScrollView, useTheme, VStack } from "native-base";

import Logo from "../assets/logo_primary.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleButton() {
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <VStack flex={2} alignItems="center" bg="gray.600" px={8} pt={24}>
      {/* <ScrollView> */}
        <Logo />

        <Heading color="gray.100" fontSize="xl" fontFamily="heading" mt={20} mb={6}>
          Acesse sua conta
        </Heading>

        <Input
          mb={4}
          placeholder="Email"
          onChangeText={(e) => setEmail(e)}
          InputLeftElement={<Icon as={<Envelope />} ml={4} />}
        />
        <Input
          mb={8}
          secureTextEntry
          placeholder="Senha"
          onChangeText={setPassword}
          InputLeftElement={<Icon as={<Key />} ml={4} />}
        />

        <Button
          title="Entrar"
          onPress={handleButton}
        />
      {/* </ScrollView> */}
    </VStack>
  )
};