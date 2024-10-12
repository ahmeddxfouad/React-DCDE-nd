import {ScrollView, StyleSheet, Text, View} from "react-native";


const Details = () => {

    return(
        <ScrollView>
            <View style={styles.boxContainer}>
            <View style={styles.box}>
                <Text>Box 1.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 1.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2.2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3.2</Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default Details;

const styles = StyleSheet.create({
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
})
