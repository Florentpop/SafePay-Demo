
import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, SafeAreaView, } from 'react-native';


export default function Login({navigation}) {

    return(

       <ScrollView>
        <View style = {styles.mainContainer}>

        <View style={styles.loginTextContainer}>
          
        </View>
        

        <View style={styles.imageContainer}>
        <Text style={styles.loginText}>Login</Text>
            <Image 
            style={{width: 300, height: 300, backgroundColor: "lightgray"}}
            source={require('../../../assets/images/login.png')}/>
        </View>

        <View style={styles.textInputContainer}>
            <View style={styles.textInput1}>

              <TextInput placeholder="Email"/>

             </View>

           <View style={styles.textInput2}>

               <TextInput 
                 placeholder="Password"
                 secureTextEntry={true} />

            </View>

            <TouchableOpacity onPres={() =>{
                navigation.navigate("")
            }}style={styles.forgotPasswordOpacity}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
        
        </View>

       

        <View style={styles.forgotPasswordContainer}>
          
        </View>

        <View style={styles.loginBox}>
           <TouchableOpacity onPress={() =>{
               navigation.navigate("Select")
           }} style={styles.loginOpacity}>
               <Text style={styles.signInText}>Login</Text>
           </TouchableOpacity>
           
           <View style={styles.createAccountContainer}>
              <Text style={styles.haveAccount}>Don't have an account? </Text>
              <TouchableOpacity onPress={() =>{
                  navigation.navigate("Signup")
              }} style={styles.createAccountOpacity}>
                  <Text style={styles.createAccountText}>Signup</Text>
              </TouchableOpacity>
           </View>


        </View>

         
     
     </View>
        
    
     </ScrollView>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        justifyContent: "space-evenly"
        
    },

   loginTextContainer:{
      // flex: 0.8,
       //flexDirection: "column",
       //paddingBottom: 50  
       
   },

    loginText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#00d3ff',
        paddingTop: 70,
        marginLeft: 1,
        //marginVertical: 15 
    },

    imageContainer: {
        //flex: 3.2,
        //flexDirection: "column",
        marginHorizontal: 40,
        //marginVertical: 20
    },

    textInputContainer: {
        paddingTop: 20
       //flex: 0.8,
       //flexDirection: "column"
    },

    textInput1: {
        marginLeft: 35,
        paddingLeft: 15,
        paddingVertical: 8,
        height: 45, 
        width: 300, 
        backgroundColor: "#ebecf0", 
        borderRadius: 10, 
        marginBottom: 20, 
        //marginBottom: 25
       
    },

    textInput2: {
        marginLeft: 35,
        color: "#e1d6da",
        paddingLeft: 15,
        paddingVertical: 8,
        height: 45, 
        width: 300, 
        backgroundColor: "#ebecf0", 
        borderRadius: 10
    },

    forgotPasswordContainer: {
        paddingTop: 25
       //flex: 1.2,
       
    },

    forgotPasswordOpacity: {
        marginLeft: 200,
        //marginVertical: 3
       // marginTop:45,
        
    },

    forgotPasswordText: {
        color: "#00d3ff", 
        fontSize: 18
    },

    loginBox: {
        paddingTop: 20
        //flex: 1,
        //marginBottom: 20
    },

    loginOpacity: {
      backgroundColor: "#00d3ff",
      height: 50,
      width: 150,
      borderRadius: 50,
      alignSelf: "center",
      paddingVertical: 15,
      paddingHorizontal: 54,
      //marginVertical: 15,
      textAlign: "center"
    },

    signInText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"

    },

    createAccountContainer: {
        flexDirection: "row",
        //flex: 1,
        paddingBottom: 18
    },

    haveAccount: {
      marginLeft: 25,
      fontSize: 17,
      paddingTop: 20
    },

    createAccountText: {
        color: "#00d3ff",
        fontSize: 17,
        paddingTop: 20
    }


})