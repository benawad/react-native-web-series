// rh - snippet for react object component
// rnss - snippet for react styles
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    exercise: string;
    repsAndWeight: string;
    sets: string[];
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        padding: 10
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowText: {
        fontSize: 16
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 14
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "#337f7b",
        padding: 15
    },
    whiteText: {
        height: 26,
        width: 26,
        color: "#fff"
    },
    grayText: {
        color: "gray"
    },
    circleText: {
        fontSize: 18
    },
    fadedBackground: {
        backgroundColor: "#B2A1A1"
    }
});
export const WorkoutCard: React.FC<Props> = ({ exercise, repsAndWeight, sets }) => {
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.topRowText}>{exercise}</Text>
                <Text style={styles.topRowText}>{repsAndWeight}</Text>
            </View>
            <View style={styles.bottomRow}>
                {sets.map((set, index) => {
                    // state X
                    if (set.toUpperCase() === "X") {
                        return (
                            <View style={[styles.circle, styles.fadedBackground]} key={set + index}>
                                <Text
                                    style={[styles.circleText, styles.grayText]}
                                    key={set + index}
                                >
                                    X
                                </Text>
                            </View>
                        );
                    }
                    // state ""
                    if (set === "") {
                        return (
                            <View style={[styles.circle, styles.fadedBackground]} key={set + index}>
                                <Text style={styles.circleText} key={set + index} />
                            </View>
                        );
                    }
                    // default
                    return (
                        <View style={styles.circle} key={set + index}>
                            <Text style={[styles.whiteText, styles.circleText]} key={set + index}>
                                {set}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
