import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./Tab1";
import { PokemonScreen, SearchScreen } from "../screens";

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tab2.Screen name="HomeScreen" component={ SearchScreen } />
      <Tab2.Screen name="PokemonScreen" component={ PokemonScreen } />
    </Tab2.Navigator>
  );
}