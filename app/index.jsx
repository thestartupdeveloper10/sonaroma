import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="bg-gray-900 flex-1 justify-center items-center">
      <Text className="text-gray-400 text-3xl font-pblack">sonoroma!</Text>
      <StatusBar style="auto" />
      <Link href="/Home" className="text-gray-400 text-3xl font-pblack">Home</Link>
      
    </View>
  );
}


