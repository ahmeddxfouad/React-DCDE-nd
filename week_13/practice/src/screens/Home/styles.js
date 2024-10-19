import {StyleSheet} from "react-native";


const stylesFn = () => {

    const styles = {
        header: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        inputContainer: {
            marginBottom: 20,
            alignItems: "center"
        },
        input: {
            width: '100%',
            maxWidth: 300,
            borderColor: 'rgb(41, 27, 204)',
            borderWidth: 2,
            height: 40,
            paddingHorizontal: 10,
            marginBottom: 10
        }
    };

    return StyleSheet.create(styles);
}

export default stylesFn;
