import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';

const AppNavigator = createStackNavigator({
    'Login': {
        screen: LoginScreen,
    },
}, {
  defaultNavigationOptions: {
    title: 'Séries',
    headerStyle: {
        backgroundColor: '#faf'
    },
    headerTintColor: 'white'
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer; 