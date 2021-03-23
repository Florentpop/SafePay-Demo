import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function SummaryScreen ({navigation}) {
    return(
       <View style={styles.mainContainer}>

          <View style={styles.amountContainer}>
             <Text style={styles.amountText}>
                  Summary
             </Text>

             <Text style={styles.totalText}>
                  GH{'\u20B5'}1,820.20
             </Text>

             <Text style={styles.safepayText}>
                  SafePay fee GH{'\u20B5'}20.20
             </Text>
          </View>

          <View style={styles.horizontalLine}/>


          <View style={styles.sellerContainer}>
              <Text style={styles.dealingText}>
                 You are dealing with 
              </Text>
              <Text style={styles.numberText}>
                  +233239098765
              </Text>
              <Text style={styles.companyText}>
                  Flotech Ltd
              </Text>

            </View>

            <View style={styles.horizontalLine}/>

          <View style={styles.itemContainer}>
            <Text style={styles.purchaseText}>
               Your are purchasing
            </Text>
            <Text style={styles.itemText}>
               a Television set
            </Text>
          </View>

          <View style={styles.horizontalLine}/>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
               Description
            </Text>
            <Text style={styles.itemText}>
               Nasco Television set 32"
            </Text>
          </View>

          <View style={styles.opacityContainer}>
              <TouchableOpacity style={styles.opacity}>
                 <Text style={styles.continue}>Continue</Text>
              </TouchableOpacity>
          </View>
       
       </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "space-evenly"
    },

    amountContainer: {
       backgroundColor: "lightgrey",
       height: 150,
       width: 300,
       alignSelf: "center",
    },

    amountText: {
      fontSize: 25,
      fontWeight: "bold",
      paddingBottom: 15,
      paddingTop: 10,
      textAlign: "center"
    },

    totalText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 20,
        textAlign: "center"
    },

    safepayText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "blue",
        textAlign: "center"
    },

    horizontalLine: {
        borderBottomColor: "#ff70d9",
        borderBottomWidth: 1,
        width: 300,
        alignSelf: "center"
    },

    sellerContainer: {
        alignSelf: "center",
       
    },
    dealingText: {
        paddingBottom: 20,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20

    },
    numberText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20

    },
    companyText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },

    itemContainer: {
    alignSelf: "center",
    },
    purchaseText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    itemText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },

    descriptionContainer: {
       alignSelf: "center"
    },
    descriptionText: {
       fontSize: 20,
       fontWeight: "bold",
       textAlign: "center"
    },

    opacityContainer: {
       alignSelf: "center"
    },
    opacity: {
        backgroundColor: "#00d3ff",
        width: 150,
        height: 50,
        borderRadius: 30
    },
    continue: {
        color: "#fff",
        textAlign: "center",
        paddingTop: 15,
        fontWeight: "bold",
        fontSize: 16
    }
})