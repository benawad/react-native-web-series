import React from "react";
import { StyleSheet, View } from "react-native";
import { Router } from "./Router";

// <Router /> contains <Workout /> and <CurrentWorkout /> components.
// <Router /> also holds reference to RouterStoreContext.screen property.
// RouterStoreContext is injected into <Router /> via the useContext hook
// and is used to control the page that is returned by <Router's /> render logic.
export const App = () => {
    return (
        <View style={styles.container}>
        <View style={styles.wrapper} >
            <Router />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    wrapper: {
        backgroundColor: "#F5FCFF",
        width: "100%",
        maxWidth: 425
    }
});
