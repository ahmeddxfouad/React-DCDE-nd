import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import Index from "../../screens/Details";
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
                <Drawer.Screen name="Details" component={Index} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation;
