import {StyleSheet, View, Pressable, Modal, Text, TextInput} from "react-native"
import { useState } from "react";

function SemesterModal(props) {

    const [season, setSeason] = useState()

    

    return(
         <Modal visible={props.visible} transparent={true}>
            <View style={styles.addSemester}>
                <View style={styles.modalTitle}>
                    <Text style={styles.titleModalText}>Add Semester</Text>
                </View>
                <View style={styles.yearData}>
                    <Text>Year</Text>
                    <TextInput placeholder='Enter year'/>
                </View>
                <View style={styles.buttonsForSeasons}>
                    <Pressable></Pressable>
                    <Pressable></Pressable>
                    <Pressable></Pressable>
                </View>
            </View>
        </Modal>
    )
    
}
export default SemesterModal;

const styles = StyleSheet.create({
    addSemester : {
        margin: 50,
        backgroundColor: "#3f3f3f",
        elevation: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignContent:"center"
      },
      modalTitle: {
        alignSelf: "center",
        alignItems: "center",
        borderBottomColor: "white",
        borderBottomWidth: 2,
        width: "80%",
        padding: 10
      },
      titleModalText: {
        color: "white",
        fontSize: 20,
      } 
})