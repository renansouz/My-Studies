import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/welcome/index';
import SignIn from '../pages/SignIn/index';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}