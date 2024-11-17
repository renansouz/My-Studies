import React from "react";
import { View, Button, Image, Input, Icon, Stack, Pressable, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function Example() {
  return <Center>
    <Image size={150} borderRadius={100} marginBottom={10} source={{
      uri: "https://conteudo.imguol.com.br/c/entretenimento/0a/2021/01/19/mulher-gravida-gravidez-gestacao-barriga-1611086446142_v2_4x3.jpg"
    }} alt="Alternate Text" />
  </Center>;
}


const Examplee = () => {
  const [show, setShow] = React.useState(false);
  return <Stack space={4} w="100%" alignItems="center">
    <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
    <Input w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
    </Pressable>} placeholder="Password" />
  </Stack>;
};

const Exampleee = () => {
return (
  <View style = {{
    marginTop: 20
  }
  }>
  <Button
    title="Press me"
    onPress={() => Alert.alert('Simple Button pressed')}
  />
</View>
)}

export default () => {
  return (
    <NativeBaseProvider >
      <Center backgroundColor={"#356"} flex={1} px="3">
        <Example />
        <Examplee />
        <Exampleee />


      </Center>
    </NativeBaseProvider>
  );
};
