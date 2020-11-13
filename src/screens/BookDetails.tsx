import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

interface IHomeScreenProps {
  navigation: any;
  route: any;
}

const BookDetailsScreen: React.FC<IHomeScreenProps> = ({
  navigation,
  route,
}) => {
  const { bookId } = route.params;
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "red", fontSize: 100 }}>
        Clicou no livro com id {bookId}
      </Text>
    </View>
  );
};

export default BookDetailsScreen;
