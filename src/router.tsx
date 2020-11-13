import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BooksScreen from "./screens/Books";
import BookDetailsScreen from "./screens/BookDetails";

export type RootStackParamList = {
  Books: undefined;
  BookDetails: { bookId: string; title: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen
          name="Books"
          component={BooksScreen}
          options={{ title: "Livros" }}
        />
        <Stack.Screen
          name="BookDetails"
          // initialParams={{ bookId: book.id }}
          component={BookDetailsScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
