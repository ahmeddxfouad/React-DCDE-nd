import {ScrollView, StyleSheet, Text, View} from "react-native";
import stylesFn from "./styles";
import {useSelector} from "react-redux";


const Index = () => {

    const styles = stylesFn();
    const dataList = useSelector((state) => state.data.data);


    return(
        <ScrollView>
            <View style={styles.boxContainer}>
                {
                    dataList.length > 0 ?

                        dataList.map((element) => (
                            <View key={element.id} style={styles.box}>
                                <Text>{ element.name }</Text>
                            </View>
                        ))

                        :

                    <View key={element.id} style={styles.box}>
                        <Text>No Data Available</Text>
                    </View>

                }


            </View>
        </ScrollView>
    )
}

export default Index;
