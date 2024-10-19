import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import Details from "../../screens/Details";
import Home from "../../screens/Home/Home";


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {


    return(
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    drawerStyle : {
                        backgroundColor: 'rgb(200, 100, 100)',
                        width: 300
                    }
                }}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Details" component={Details} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation;
