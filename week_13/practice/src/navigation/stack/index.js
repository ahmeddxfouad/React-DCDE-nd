import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from "../../screens/Details";
import Home from "../../screens/Home/Home";


const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Index} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default StackNavigation;
