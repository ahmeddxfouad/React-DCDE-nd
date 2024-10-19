import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home/Home";
import Details from "../../screens/Details";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {

    return(
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={({route}) => ({

                  tabBarIcon: ({focused, size, color}) => {

                      let iconName;

                      if (route.name === "Home") {
                          iconName = focused ? 'home-outline' : 'home';
                      } else if (route.name === "Details") {
                          iconName = focused ? 'apps-outline' : 'apps';
                      }

                      return <Ionicons name={iconName} size={size} color={color} />
                  },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'grey'

                })}
            >
                <Tabs.Screen name="Home" component={Home} />
                <Tabs.Screen name="Details" component={Details} />
            </Tabs.Navigator>
        </NavigationContainer>
    )

}

export default TabNavigation;
