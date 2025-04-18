import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = email.includes("@");

  const handleSignUp = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify({ name, email }));
      Alert.alert("Success", "Account created!");
      navigation.navigate("Login");
    } catch (err) {
      Alert.alert("Error", "Could not save user");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Group.png")} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Full Name" />

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        {isValidEmail && (
          <AntDesign name="checkcircle" size={20} color="green" style={{ marginLeft: 10 }} />
        )}
      </View>

      <Text style={styles.terms}>
        By continuing you agree to our{" "}
        <Text style={{ textDecorationLine: "underline" }}>Terms of Service</Text> and{" "}
        <Text style={{ textDecorationLine: "underline" }}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.loginLinkContainer}>
        <Text style={styles.normalText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#fff" },
  logo: { width: 40, height: 40, alignSelf: "center", marginTop: 60 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  subtitle: { fontSize: 14, color: "#777", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 14, marginTop: 10, marginBottom: 5 },
  input: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8,
    padding: 12, marginBottom: 10
  },
  inputRow: { flexDirection: "row", alignItems: "center" },
  terms: {
    fontSize: 12, color: "#777", textAlign: "center",
    marginVertical: 10
  },
  signUpButton: {
    backgroundColor: "#28a745", padding: 15,
    borderRadius: 8, alignItems: "center", marginTop: 10
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },
  normalText: { color: "#555" },
  loginLink: { color: "#28a745", fontWeight: "500" },
});

export default SignUpScreen;
