import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import stylesFn from "./styles";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addData} from "../../store/slices/dataSlicer";


const Home = () => {

    const styles = stylesFn();
    const navigation = useNavigation();

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    return(
        <View>
            <Text style={styles.header}>Hello, World!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type anything!!"
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <Button title="Submit"
                        onPress={() => {
                            console.log("Submitted!");
                            dispatch(addData(inputValue));
                            setInputValue('');
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
