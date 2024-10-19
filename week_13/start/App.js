import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import StackNavigation from "./src/navigation/stack";
import TabNavigation from "./src/navigation/tab";
import DrawerNavigation from "./src/navigation/drawer";

export default function App() {
  return (
  <SafeAreaView style={styles.safeArea}>
    {/*<StackNavigation/>*/}
    {/*<TabNavigation/>*/}
    <DrawerNavigation/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: '#f2f2f2',
  }
});
