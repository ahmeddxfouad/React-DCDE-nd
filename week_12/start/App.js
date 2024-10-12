import { StatusBar } from 'expo-status-bar';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Hello, World!</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Type anything!!"/>
          <Button title="Submit"
                    onPress={() => console.log("Submitted!")}
          >
            <Text>Submit</Text>
          </Button>
        </View>

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

        <StatusBar style="auto" />
        </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flexGrow: 1,
    alignItems: 'left',
    justifyContent: 'top',
    padding: 20
  },
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
  },
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
});
