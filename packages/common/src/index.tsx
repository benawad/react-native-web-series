import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CounterStoreContext } from "./stores/CounterStore";

export const App = observer(() => {
    // const [count, setCount] = useState(0);
    const counterStore = useContext(CounterStoreContext);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>React Native running from common project library</Text>
            <Text style={styles.instructions}>Same code running on web, and as app!</Text>
            <Text style={styles.instructions}>{counterStore.count}</Text>
            <Button title="Increment" onPress={() => counterStore.count++} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
