import React, { useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState("merchandise", "buyer");
  return (
   <View style={styles.mainContainer}>
        <View style={styles.type}>
        <Text style={styles.typeText}>What type of Transaction?</Text>
           <Picker
               selectedValue={selectedValue}
               style={{ height: 100, width: 200 }}
               onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
               <Picker.Item label="Merchandise" value="merchandise" color= "blue" />
               <Picker.Item label="Other" value="other" color= "gray" />
           </Picker>
       </View>

        <View style={styles.select}>
        <Text style={styles.whoText}>Who are you?</Text>
            <Picker
               textStyle={{fontSize: 18}}
               selectedValue={selectedValue}
               style={{height: 100, width: 200}}
               onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
               <Picker.Item label="Buyer" value="buyer" color= "blue"  />
               <Picker.Item label="Seller" value="seller"  color= "blue" />
               <Picker.Item label="Admin" value="admin"  color= "blue" />
           </Picker>
        </View>
        
        <View style={styles.opacity}>
           <TouchableOpacity style={styles.touchable}>
              <Text style={styles.continueText}>Continue</Text>
           </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "space-between"
  },

  type: {
     flex: 1
  },

  typeText: {
    fontSize: 20

  },

  select: {
      flex: 1
  },

  whoText: {
      fontSize: 20
  },

  opacity: {
      flex: 0.5
  },

  touchable: {
      backgroundColor: "#00d3ff",
      height: 50,
      width: 120,
      borderRadius: 30,
  },

  continueText: {
      fontSize: 18,
      color: "white",
      textAlign: "center",
      paddingTop: 12,
      fontWeight: "bold"
  }
  
});

export default Select;