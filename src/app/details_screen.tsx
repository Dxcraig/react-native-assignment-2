import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams, useRouter } from 'expo-router'
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function details_screen() {
  const params = useLocalSearchParams();
  const [started, setStarted] = useState(false);
  const router = useRouter();
  return (
    <SafeAreaView style={styles.details}>
      {/* <Text>{params.title}</Text>
      <Text>{params.duration}</Text>
      <Text>{params.calories}</Text> */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.more} onPress={() => router.back()}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#BFBFBF" />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text >{params.title}</Text>
        </View>
        <View style={styles.more}>
          <FontAwesome6 name="ellipsis-vertical" size={24} color="#BFBFBF" />
        </View>
      </View>
      
      <View style={styles.sheet}>
        <TouchableOpacity style={styles.playButton} onPress={() => setStarted(!started)}>
          <Ionicons name={started ? "checkmark" : "play"} size={28} color="white" />
          <Text style={styles.startText}>{started ? "Completed" : "Start Workout"}</Text>
        </TouchableOpacity>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <View style={styles.statIcon}>
              <Ionicons name="time-outline" size={18} color="#D4537E" />
            </View>
            <Text style={styles.statValue}>{params.duration}</Text>
            <Text style={styles.statLabel}>Duration</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <View style={styles.statIcon}>
              <Ionicons name="flame-outline" size={18} color="#D4537E" />
            </View>
            <Text style={styles.statValue}>{params.calories}</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    backgroundColor: "#FCE4E8"
  },
  sheet: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 300,
    
  },
  playButton: {
    width: 200,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#fb637a",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: -32,      
    zIndex: 2,
    flexDirection: "row",
    gap: 8        
  },
    startText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "500",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30
  },
  more: {
    borderWidth: 1,
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 56,
    borderColor: "#BFBFBF"
  },
  title: {
    alignItems: "center",
    justifyContent: "center"
  },
  statsRow: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginVertical: 24,
  },
  stat: {
    alignItems: "center",
    gap: 6,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FBEAF0",
    justifyContent: "center",
    alignItems: "center",
  },
  statValue: {
    fontSize: 15,
    fontWeight: "500",
    color: "#040415",
  },
  statLabel: {
    fontSize: 13,
    color: "#7F7F7F",
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#E0E0E0",
  },
})