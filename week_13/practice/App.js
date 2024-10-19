import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import StackNavigation from "./src/navigation/stack";
import TabNavigation from "./src/navigation/tab";
import DrawerNavigation from "./src/navigation/drawer";
import {Provider} from "react-redux";
import initialStore from "./src/store";

const store = initialStore();

export default function App() {
  return (
  <Provider store={store}>
    <SafeAreaView style={styles.safeArea}>
      <StackNavigation/>
      {/*<TabNavigation/>*/}
      {/*<DrawerNavigation/>*/}
    </SafeAreaView>
  </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: '#f2f2f2',
  }
});
