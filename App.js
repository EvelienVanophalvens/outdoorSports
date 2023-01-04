import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import OverviewScreen from './screens/OverviewScreen';
import detailScreen from './screens/detailScreen';
import favouritesScreen from './screens/favouritesScreen';
import PictureScreen from './screens/pictureScreen';




const Stack = createNativeStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="Detail" component={detailScreen} options={{animation:'slide_from_bottom'}} />
        <Stack.Screen name="Favourites" component={favouritesScreen}  />
        <Stack.Screen name="picture" component={PictureScreen} options={{animation:'fade'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


