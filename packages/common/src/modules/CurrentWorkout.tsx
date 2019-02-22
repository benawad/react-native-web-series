import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ErrorBoundary } from "../modules/ErrorBoundary";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props {}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        margin: 10
    }
});
export const CurrentWorkout: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <ErrorBoundary>
                <WorkoutCard
                    exercise="Squat"
                    repsAndWeight="5x5 212lbs"
                    sets={["1", "2", "3", "", "x"]}
                />
            </ErrorBoundary>
        </View>
    );
};
