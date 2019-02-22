// rh - snippet for react object component
// rnss - snippet for react styles

// WorkoutCard.tsx - react JSX function object.
// ------------------------
// 1. React function object using JSX.
// 2. Receives exercise, reps, sets[] as properties from above.
//    (these are @observable state properties, so entire component definition is
//     decorated with observer() call to listen in on @observable changes in state)
// 4. Clickable circle uses <TouchableOpacity/> rather than <View /> for "onPress" event.
// 5. "onPress" event logic is passed in as property from <CurentWorkout /> above.
import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    exercise: string;
    repsAndWeight: string;
    sets: string[];
    onSetPress: (index: number) => void;
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        padding: 10,
        marginBottom: 10
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
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "#337f7b"
    },
    whiteText: {
        color: "#fff"
    },
    grayText: {
        color: "#655252"
    },
    circleText: {
        fontSize: 16,
        margin: "auto"
    },
    fadedBackground: {
        backgroundColor: "#B2A1A1"
    }
});
// react function definition placed within observer() decorator to register for listening
export const WorkoutCard: React.FC<Props> = observer(
    ({ exercise, repsAndWeight, sets, onSetPress }) => {
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
                                <View
                                    style={[styles.circle, styles.fadedBackground]}
                                    key={set + index}
                                >
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
                                <TouchableOpacity
                                    onPress={() => onSetPress(index)}
                                    style={[styles.circle, styles.fadedBackground]}
                                    key={set + index}
                                >
                                    <Text style={styles.circleText} key={set + index} />
                                </TouchableOpacity>
                            );
                        }
                        // default
                        // clickable, so onPress() call the onSetPress() handler logic
                        // passed in as property from above.
                        // call it with this component's current "index" value.
                        // e.g. onSetPress(indes).
                        return (
                            <TouchableOpacity
                                onPress={() => onSetPress(index)}
                                style={styles.circle}
                                key={set + index}
                            >
                                <Text
                                    style={[styles.whiteText, styles.circleText]}
                                    key={set + index}
                                >
                                    {set}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }
);
