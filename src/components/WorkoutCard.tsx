import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


type WorkoutCardProps = {
    title: string;
    duration: string;
    calories: string;
    icon: React.ComponentProps<typeof Ionicons>["name"];
    onPress: () => void;
};


export default function WorkoutCard({ title, duration, calories, icon, onPress }: WorkoutCardProps) {
    const [favourite, setFavourite] = useState(false);
    return (
        <View style={styles.cardOutline}>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <View style={styles.iconCircle}>
                    <Ionicons name={icon} size={26} color="#F0778A" />
                </View>

                <View style={styles.middle}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.duration}>{duration}</Text>
                </View>

                <View style={styles.right}>
                    <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                        <Ionicons
                            name={favourite ? "heart" : "heart-outline"}
                            size={22}
                            color="#F0778A"
                        />
                    </TouchableOpacity>
                    <Text style={styles.calories}>{calories}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    cardOutline: {
        flex: 1,
        paddingHorizontal: 15,
    },
    card: {
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#BFBFBF",
        borderRadius: 36,
        paddingLeft: 8,
        paddingRight: 24,
        marginBottom: 16,
    },
    iconCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#FDE7EB",
        justifyContent: "center",
        alignItems: "center",
    },
    middle: { flex: 1, marginLeft: 16 },
    title: { fontSize: 14, fontWeight: "500", color: "#040415" },
    duration: { fontSize: 14, color: "#7F7F7F", marginTop: 2 },
    right: { alignItems: "flex-end", gap: 4 },
    calories: { fontSize: 14, fontWeight: "500", color: "#040415" },
});
