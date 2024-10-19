import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import stylesFn from "./styles";
import {useNavigation} from "@react-navigation/native";


const Home = () => {

    const styles = stylesFn();
    const navigation = useNavigation();

    return(
        <View>
            <Text style={styles.header}>Hello, World!</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Type anything!!"/>
                <Button title="View Details"
                        onPress={() => {
                            console.log("Submitted!");
                            navigation.navigate('Details');
                        }}
                >
                    <Text>Submit</Text>
                </Button>
            </View>
        </View>
    )
}

export default Home;
