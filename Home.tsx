import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NativeStackParamList = {
  Home: undefined;
  Flow: undefined;
};

export const Home = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<NativeStackParamList>>();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Flow" onPress={() => navigate("Flow")} />
    </View>
  );
};
