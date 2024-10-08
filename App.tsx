import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { FlowNavigatorExample, AppProvider } from "./flow";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Flow" component={FlowNavigatorExample} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
