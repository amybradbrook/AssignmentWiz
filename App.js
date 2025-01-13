import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 

      </View>
      <View style={styles.middle}>
        <View style={styles.winter}>
          <Text style={styles.semesterName}>Winter 2024</Text>
        </View>
      </View>
      <View style={styles.footer}>

      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
  },
  winter: {
    backgroundColor: "#5271ff",
    padding: 10,
    margin: 20,
    borderRadius: 6
  },
  semesterName: {
    fontSize: 30,
    color: "white"
  },
  header: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    width: "100%",
    borderRadius: 9
  },
  middle: {
    flex: 8,
    backgroundColor: "#242323",
    width: "100%"
  },
  footer: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    width: "100%",
    borderRadius: 9
  }
});
