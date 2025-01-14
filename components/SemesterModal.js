import {StyleSheet, View, Pressable, Modal, Text, TextInput, Image} from "react-native"
import { useState } from "react";

function SemesterModal(props) {

    const [season, setSeason] = useState();
    const [enteredNameText, setName] = useState("");

    function setWinter(){
        setSeason("Winter")
    }

    function setSummer(){
        setSeason("Summer")
    }

    function setFall(){
        setSeason("Fall");
    }

    function semesterNameHandler(enteredText){
        setName(enteredText);
    }

    function onSubmit(){
        if (enteredNameText!="" && season!=""){
            props.onAddSemester(season, enteredNameText);
            setName("");
            setSeason("");
            props.closeModal();
        }
    }

    return(
         <Modal visible={props.visible} transparent={true}>
            <View style={styles.addSemester}>
                <View style={styles.modalTitle}>
                    <Text style={styles.titleModalText}>Add Semester</Text>
                </View>
                <View style={{marginBottom: -90}}>
                    <Text style={styles.headerText}>Semester Name</Text>
                    <TextInput placeholder='Enter year' style={styles.nameInput} onChangeText={semesterNameHandler}/>
                </View>
                <View>
                    <Text style={styles.headerText}>Seasons</Text>
                    <View style={styles.buttonsForSeasons}>
                        <Pressable onPress={setWinter}>
                            <Image source={require("../assets/winter.jpg")} style={styles.images}/>
                        </Pressable>
                        <Pressable onPress={setSummer}>
                            <Image source={require("../assets/summer.jpg")} style={styles.images}/>
                        </Pressable>
                        <Pressable onPress={setFall}>
                            <Image source={require("../assets/fall.jpg")} style={styles.images}/>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Pressable style={styles.submit} onPress={onSubmit}>
                        <Text style={styles.submitText}>Submit</Text>
                    </Pressable>
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
      containers: {
        flex:1
      },
      modalTitle: {
        alignSelf: "center",
        alignItems: "center",
        borderBottomColor: "white",
        borderBottomWidth: 2,
        width: "80%",
        padding: 10,
        marginBottom: 20
      },
      titleModalText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
      },
      headerText: {
        color: "white",
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: "bold"
      },
      nameInput: {
        backgroundColor: "#737373",
        width: "80%",
        height: "25%",
        borderRadius: 50,
        color: "white",
        padding: 10,
        margin: 10,
        alignSelf: "center"
      }, 
      images: {
        width: 100,
        height: 200,
        padding: 10
      },
      buttonsForSeasons: {
        flexDirection: "row",
        justifyContent: "center",
      },
      submit: {
        backgroundColor: "#0cc0df",
        width: "70%",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 50
      },
      submitText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        padding: 10
      }

})