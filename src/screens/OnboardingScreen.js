import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../../assets/images/onboarding.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Thêm logo */}
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.subtitle}>The best app to manage your tasks and stay productive.</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,  // Điều chỉnh kích thước logo
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20, // Thêm khoảng cách giữa logo và tiêu đề
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
