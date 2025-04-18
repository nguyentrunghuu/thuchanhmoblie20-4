import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { AntDesign } from "@expo/vector-icons";

// Import ảnh nền
const backgroundImage = require("../../assets/images/MaskGroup.png");

const EnterNumberScreen = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState("BD"); // Bangladesh mặc định
  const [callingCode, setCallingCode] = useState("880");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Hàm xử lý chuyển sang màn OTP
  const handleNext = () => {
    navigation.navigate("OTPVerification"); // Chuyển sang OTP mà không truyền params
  };
  

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} blurRadius={5}>
      <View style={styles.container}>
        {/* Nút quay lại */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        {/* Tiêu đề */}
        <Text style={styles.title1}>Enter your mobile number</Text>
        <Text style={styles.title2}>Mobile number:</Text>

        {/* Ô nhập số điện thoại */}
        <View style={styles.phoneContainer}>
          <CountryPicker
            withFlag
            withCallingCodeButton
            countryCode={countryCode}
            withFilter
            onSelect={(country) => {
              setCountryCode(country.cca2);
              setCallingCode(country.callingCode[0]);
            }}
            containerButtonStyle={styles.countryPicker}
          />
          <TextInput
            style={styles.phoneInput}
            keyboardType="phone-pad"
            placeholder="Enter your number"
            placeholderTextColor="#999"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* Nút tiếp tục */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <AntDesign name="arrowright" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Màu nền mờ trên ảnh
  },
  backButton: {
    marginTop: 20,
  },
  title1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#000",
  },
  title2: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5,
    color: "#000",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    backgroundColor: "#fff", // Để input dễ nhìn hơn
  },
  countryPicker: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  nextButton: {
    position: "absolute",
    right: 20,
    bottom: 40,
    backgroundColor: "#29a745",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EnterNumberScreen;
