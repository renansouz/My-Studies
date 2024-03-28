import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "#966",
            fontFamily: "cursive",
          }}
        >
          Pikachu Fighter
        </Text>
        <Image
          source={{
            uri: 'https://static.wikia.nocookie.net/dbxfanon/images/c/c0/Pikachu_Libre.png',
          }}
          style={{ width: 200, height: 210, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1, 
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite aquiii!"
      />
    </ScrollView>
  );
}

export default Pokemon;