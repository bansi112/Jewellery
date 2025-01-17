import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';

const AdminLoginScreen = ({ navigation, setIsAuthenticated, setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '123') {
      setIsAuthenticated(true);
      setIsAdmin(true);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <ImageBackground source={require('../assets/images/slider2.jpg')} style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.title}>Admin Login</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black overlay
  },
  container: {
    width: '90%',
    padding: 24,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff', // White text color
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    paddingHorizontal: 8,
    backgroundColor: 'transparent', // Transparent input background
    color: '#fff', // White text color
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#ff9800', // Orange background for the button
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff', // White text color
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordText: {
    color: '#ff9800', // Orange color for forgot password link
    fontSize: 14,
  },
});

export default AdminLoginScreen;
