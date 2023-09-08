import React from 'react';
import { View, Text, StyleSheet,Image, Button, TouchableOpacity } from 'react-native';
import styles from './LoginStyle'
import { useNavigation } from '@react-navigation/native';
import buttonStyles from '../Component/Button/ButtonStyle';




const LoginPage = () => {
  const navigation = useNavigation();
  const handleNavigateToContent = () => {
    navigation.navigate('İçerik'); 
  };

  return (
    <View style={styles.container}>
      
    
      <Image 
      source={require('./ImagePage/fest1.jpg')}
      style={styles.imgContainer}
      />
    

      <TouchableOpacity onPress={handleNavigateToContent} style={buttonStyles.buttonContainer}>
      <Text style={buttonStyles.buttonText}>Giriş</Text>
    </TouchableOpacity>
    </View>
  );
};



export default LoginPage;
