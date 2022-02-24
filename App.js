import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Merchants from './screens/Merchants';
import ScanInvoice from './screens/ScanInvoice';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import ChangePassword from './screens/ChangePassword';
import EditProfile from './screens/EditProfile';
import Wallet from './screens/Wallet';
import TermsAndConditions from './screens/TermsAndConditions';
import PrivacyPolicy from './screens/PrivacyPolicy';
import OfferDetails from './screens/OfferDetails';
import MerchantProfile from './screens/MerchantProfile';
import Registered from './screens/Registered';
import MapViewScreen from './screens/MapViewScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        // initialRouteName="Login"
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Merchants" component={Merchants} />
        <Stack.Screen name="ScanInvoice" component={ScanInvoice} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="OfferDetails" component={OfferDetails} />
        <Stack.Screen name="Merchant" component={MerchantProfile} />
        <Stack.Screen name="Registered" component={Registered} />
        <Stack.Screen name="MapView" component={MapViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
