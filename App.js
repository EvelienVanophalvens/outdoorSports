import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OverviewScreen from './screens/OverviewScreen';
import detailScreen from './screens/detailScreen';
import favouritesScreen from './screens/favouritesScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="Detail" component={detailScreen} />
        <Stack.Screen name="Favourites" component={favouritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


