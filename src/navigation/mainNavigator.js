import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '../components/auth/sigin';
import SignUp from '../components/auth/signup';

import DashBoard from '../components/dashboard/home'

import Splash from '../splash/index'

const AuthNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerShown: false
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    },
  }
})

const AppNavigator = createStackNavigator({
  DashBoard: {
    screen: DashBoard,
    navigationOptions: {
      headerShown: false,
    },
  }
})

const SplashNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  }
  },{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Splash',
})

const stackNaviagtor = createStackNavigator({
  Auth: AuthNavigator,
  DashBoard: AppNavigator,
  AuthLoading: SplashNavigator,
},
{
  initialRouteName: 'AuthLoading',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

export default createAppContainer(stackNaviagtor)