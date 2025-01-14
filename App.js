import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable, Modal, TextInput } from 'react-native';
import { use, useState } from 'react'
import SemesterModal from './components/SemesterModal'


export default function App() {

  const [semesters, setSemester] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function openCreateSemester(){
    setModalIsVisible(true);
  }

  function addSemester(seasonValue, semesterName){
    setSemester((currentSemester) => [...currentSemester, {season: seasonValue, semester: semesterName, id: Math.random().toString()}]);
  }

  function endGoalHandler(){
    setModalIsVisible(false);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <SemesterModal visible={modalIsVisible} closeModal={endGoalHandler} onAddSemester={addSemester}/>
      <View style={styles.middle}>
        <View style={styles.winter}>
          <Text style={styles.semesterName}>Winter 2024</Text>
        </View>
        <View style={styles.addCourse}>
          <Pressable onPress={openCreateSemester}>
            <Text>+</Text>
          </Pressable>
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
    backgroundColor: "#242323"
  },
  winter: {
    backgroundColor: "#5271ff",
    padding: 10,
    margin: 20,
    borderRadius: 20,
    paddingVertical: 20
  },
  semesterName: {
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },
  header: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    width: "100%",
    borderRadius: 9
  },
  middle: {
    flex: 10,
    backgroundColor: "#242323",
    width: "100%",
    height: "80%"
  },
  addCourse: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    width: 50,
    height: 50,
    borderRadius: 100
  },
  footer: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    width: "100%",
    borderRadius: 9
  }, 
});
