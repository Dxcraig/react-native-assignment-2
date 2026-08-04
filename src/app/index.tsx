import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {workouts} from "../data"
import WorkoutCard from "@/components/WorkoutCard";


export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Link href="/details_screen" push asChild>
        <Text>Details</Text>
      </Link> */}
      <View style={styles.header}>
        <View style={styles.more}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>
        <View style={styles.title}>
          <Text >Discover</Text>
        </View>
        <View style={styles.more}>
          <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
        </View>
      </View>
      
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <WorkoutCard
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            icon={item.icon}
            onPress={() => {}}
          />
          
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  more: {
    borderWidth: 1,
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 56,
  },
  title: {
    alignItems: "center",
    justifyContent: "center"
  },
  fitnessImage: {
    width: 375,
    height: 252
  }
});
