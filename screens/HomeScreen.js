import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper autoplay horizontal={false} height={200} activeDotColor="#fff">
          <View style={styles.slide}>
            <Image
              source={require("../assets/Escrow-Account.png")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../assets/customer-with-bags.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../assets/images1.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.texts}>
        <Text
          style={{
            fontWeight: "200",
            fontSize: 15,
            textAlign: "center",
            letterSpacing: 2,
            marginTop: 20,
            margin: 10,
          }}
        >
          A safer way for buyers to pay you with confidence in digital
          marketplaces.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/wallet.png")} />
      </View>

      <View
        style={{
          //fontWeight: "bold",
          fontSize: 15,
          textAlign: "center",
          letterSpacing: 2,
          marginTop: 20,
          margin: 10,
        }}
      >
        <Text>An alternative checkout method on product pages for</Text>
        <Text
          style={{ color: "#00B0FF", textAlign: "center", fontWeight: "200" }}
        >
          online stores
        </Text>
      </View>

      <View style={styles.regBtn}>
        <TouchableOpacity
          onPress={() => {
            //navigation.navigate("#");
          }}
          style={styles.regButton}
        >
          <Text style={styles.regText}>Start SafePay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sliderContainer: {
    height: 200,
    width: "93%",
    marginTop: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
  },

  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
  },

  regButton: {
    height: 40,
    width: 120,
    backgroundColor: "#00B0FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginTop: 20,
  },
  regText: {
    color: "white",
    fontSize: 15,
  },

  imageContainer: {},

  image: {
    height: 122,
    width: "60%",
    alignSelf: "center",
    marginTop: 5,
  },
  regBtn: {
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
