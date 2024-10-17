import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconFeather from 'react-native-vector-icons/Feather'
import React, { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function Screen01({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.v1}>
      <Image style={styles.img} source={require('../assets/Image_95.png')}/>
     </View>
     <View style={styles.v2}>
      <Text style={styles.txt_your_task}>MANAGE YOUR{'\n'}TASK</Text>
      <View style={styles.v_txt_ip_your_name}>
        <IconFontisto name="email" color="#000000" size={20} /> 
        <TextInput style={styles.txt_ip_your_name} placeholder='Enter your name' placeholderTextColor='#BCC1CA'/>
      </View>   

      <TouchableOpacity onPress={() => navigation.navigate('Screen02')}>
      <View style={styles.v_get_started}>
       <Text style={styles.txt_get_started}>GET STARTED</Text>
       <IconAntDesign name="arrowright" color="#ffffff" size={20} />
      </View>
     </TouchableOpacity>
     </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  txt_get_started:{
    fontSize: 16,
    color: '#ffffff',
    marginRight: 5,
  },
  v_get_started:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#00BDD6',
    height: 44,
    width: 190,
    borderRadius: 12,
  },
  txt_ip_your_name:{
    height: 43,
    width: 334,
    marginLeft: 10,
    fontSize: 16,
    color: '#00000',
  },
  v_txt_ip_your_name:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 43,
    width: 334,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#9095A0',
    paddingLeft: 16,
  },
  txt_your_task:{
    textAlign: 'center',
    color:'#8353E2',
    fontWeight: 'bold',
    fontSize: 24,
  },
  v2:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img:{
    width: 271,
    height: 271,
  },
  v1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
