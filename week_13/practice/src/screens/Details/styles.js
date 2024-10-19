import {StyleSheet} from "react-native";


const stylesFn = () => {

    const styles = {
        boxContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap"
        },
        box: {
            width: '30%',
            height: 100,
            backgroundColor: "rgb(200, 100, 100)",
            margin: 5,
            justifyContent: "center",
            alignItems: "center"
        }
    };

    return StyleSheet.create(styles);
}

export default stylesFn;
