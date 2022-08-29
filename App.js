import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, Image} from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);//random
  const [anumber, setAnumber] = useState(0);//arvattu numero
  const [count, setCount] = useState(1);//laskuri

   
const getRandomNumber = () => {  //random yhteenkertaan
  const xnumber = Math.floor(Math.random() * 100) + 1;
 setNumber(xnumber);
  }
 
 const buttonPressed = () => { //counter
   setCount(count + 1);
  
    if (anumber > number ){
      Alert.alert('Your guess: ' + anumber + ' is too high ' + number); 
    
    } else if (anumber < number){
      Alert.alert('Your guess: ' + anumber + ' is too low ' + number); 
     
    } else if (anumber == number){
      Alert.alert('Congratulations! Your guess is correct number : ' + anumber +  ' at ' + count +' attempt'); 
      setCount(0);
      getRandomNumber();
  }
      
  };
  
 useEffect(() => {
    getRandomNumber(); // this will fire only on first render
}, []);


  return (
    
    <View style={styles.container}>
         <Image style={styles.image} source={{uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d.jpg'}} />
        <TextInput  placeholder='Number' keyboardType="numeric" style={styles.input} onChangeText={anumber => setAnumber(anumber)} value={anumber}/>
             
        <Button onPress={buttonPressed} title="Make Guess" />
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  button: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    },
  image : {
    marginTop:30,
    marginBottom:30,
    width: 250,
    height: 100
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
  }
});
