import {createStackNavigator} from '@react-navigation/stack';
import {
  AlbumsScreen,
  ArtistScreen,
  DetailsAlbumScreen,
  LoginScreen,
} from '../screen';

export type RootStackParamList = {
  Login: undefined;
  Albums: undefined;
  Details: {
    albumName: string;
  };
  Artist: {
    wiki: string;
    albumName: string;
  };
};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => (
  <RootStack.Navigator
    id={undefined}
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Albums" component={AlbumsScreen} />
    <RootStack.Screen name="Details" component={DetailsAlbumScreen} />
    <RootStack.Screen name="Artist" component={ArtistScreen} />
  </RootStack.Navigator>
);

export default Navigation;
