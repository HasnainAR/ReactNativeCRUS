
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
// import ProfileScreen from './ProfileScreen';
import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';
import React, { Component, useEffect, useState } from 'react';



//   // Import the functions you need from the SDKs you need
//   import firebase, { initializeApp } from "firebase/app";
//   // import * as firebase from "firebase";

//   // import firebase from 'firebase/app';
//   import 'firebase/auth';
//   import 'firebase/firestore';

//   // import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3__9va2vzu-4x_9qWHDn4ntnXGoTkn50",
//   authDomain: "fir-expo-fa5da.firebaseapp.com",
//   projectId: "fir-expo-fa5da",
//   storageBucket: "fir-expo-fa5da.appspot.com",
//   messagingSenderId: "687421685940",
//   appId: "1:687421685940:web:e3679f8a95c51c78f857e1"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCKVoVI7D6UCL0udnU7iW0EnYaixedBrB0",

  authDomain: "crud-2ca50.firebaseapp.com",

  projectId: "crud-2ca50",

  storageBucket: "crud-2ca50.appspot.com",

  messagingSenderId: "476579487275",

  appId: "1:476579487275:web:cfabad6b125c1e2d7fd46e"

};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export default function Home({navigation}) {
 const [data1, setData1] =  useState([]);
 const [name, setName] = useState('');
 const [rollno, setRollno] = useState();
 const [count, setCount] = useState(0);

const increment = ()=>{
  setCount(count+1)
}
 

  // const createUser = () => {
  //   auth.createUserWithEmailAndPassword('akhzarn7@yahoo.com','123456')
  //   .then( data =>{
  //     // QUERY Firestore Ko Data Send Kar dain gai
  //     console.log('firebase return is = ',data)
  //     global.x=data.user.providerData[0].uid;
  //   }).catch(error=>{
  //     console.log('Catch Error',error)
  //   })
  // }
  
  
  // const loginUser = () => {
  //   auth.signInWithEmailAndPassword('akhzarn1@yahoo.com','123456')
  //   .then( data =>{
  //     // QUERY Firestore Ko Data Send Kar dain gai
  //     console.log('firebase return is = ',data)
  //     console.log('hello')
       
  //   }).catch(error=>{
  //     console.log('Catch Error',error)
  //   })
  // }
  
  // const guestUser = () => {
  //   auth.signInAnonymously()
  //   .then( data =>{
  //     // QUERY Firestore Ko Data Send Kar dain gai
  //     console.log('firebase return is = ',data)
      
  //   }).catch(error=>{
  //     console.log('Catch Error',error)
  //   })
  // }
  
  // const logoutUser = () => {
  //   auth.onAuthStateChanged(user=>{
  //     if(user){
  //       console.log('Logged in user is =', user)
  //       auth.signOut()
  //       console.log(global.x)
       
  //     }else{
  //       console.log('No One is =', user)
  //       console.log(global.x)
  //     }
  //   })
  // }
  function deleteData(name){
  var query = db.collection('Student').where('name','==',name);
  query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
}
function updateData(name,rollno){
  
   

  firebase.firestore().collection("Student")
  .where("name", "==", name)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(document) {
     document.ref.update({
      name: name,
      rollno: rollno,

     }); 
    });
  });
    
increment();
    

  
}
function refreshScreen()
{
  increment();
}
function deleteData(name){
  var query = db.collection('Student').where('name','==',name);
  query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
      increment();
    });
  });
}
function deleteAll(){
  var query = db.collection('Student')
  query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
      increment();
    });
  });
}
  function addData(name,rollno){
 
    db.collection('Student').add({
    name: name,
    rollno: rollno,
  })
  .then(() => {
    // console.log('User added!');
    // console.log(data1);
    
    
  });
  
}

  useEffect(()=>{

  

    // global.setting={
    //   fs:50,
    //   fc:'green',
    //   bc:'white'
    // }


      // db.collection('student')
      //   .doc('R3v1dlrtVX8GBBsho4eS')
      //   .onSnapshot(documentSnapshot => {
      //     console.log('User data: ', documentSnapshot.data());
      //   });
      // Stop listening for updates when no longer required
      // return () => subscriber();
        
  // const subscriber = db

    // global.y
  db.collection('Student')
  .get()
  .then(querySnapshot => {
    // console.log('Total users: ', querySnapshot.size);
    setData1([]);
    let dumpData = []
    querySnapshot.forEach(documentSnapshot => {
    
 
    dumpData = [...dumpData, documentSnapshot.data()]

    

    // console.log(documentSnapshot.data().email)
    // console.log(global.x)
      // if(global.x==documentSnapshot.data().email)
      // {
      //   //console.log('found')
      //   global.y=documentSnapshot.data();
      //   navigation.navigate('data')

      // }
      // else
      // {
      //   console.log('not found')
      // }
      
    });
    setData1(dumpData);

    
  });
  // return () => subscriber();

  },[count] )

  // const [fonts, setFonts] = useState(16)

  // useEffect(() => {
  //   // console.log('navigation useEffect is =')
  //   // const unsubscribe = navigation.addListener('focus', () => {
  //   //   setFonts(global.setting.fs)
      
  //   //   console.log('navigation useEffect is Called=', global.setting)

  //   // });
  //   // return unsubscribe;
  // }, [navigation]);

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      
      {/* {console.log('Return')} */}

      <Text> We are testing </Text>
      <View>
      <FlatList
      
        data = {data1}
        KeyExtractor={item=>item.name}
        renderItem={({item})=> (
            <View >
                <View>
                    
                    <Text style = {{paddingTop:20,paddingLeft:10}}>
                    Name: {item.name}
                    
                    

                    </Text>
                    <Text style = {{paddingLeft:10}}>
                    
                    Roll number: {item.rollno}
                    

                    </Text>
                   

                    
               
                </View>
                
                
            </View>


            
            

            
            
        )
        
      
        }/>
      </View>
      <TextInput  onChangeText={newName => setName(newName)} style={{backgroundColor:'#FFF5E4',marginBottom:20,width:320,height:50,color:'black',borderRadius:20,padding:5}}
      placeholder='name'/>
      <TextInput onChangeText={newRollno => setRollno(newRollno)} style={{backgroundColor:'#FFF5E4',marginBottom:20,width:320,height:50,color:'black',borderRadius:20,padding:5}}
      placeholder='rollno'/>

      <TouchableOpacity
      
        style={ {
          backgroundColor:"#009DAE",
          padding: 10,
          width:320,
        
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20


        }}
        onPress={()=>{addData(name,rollno);increment();}}
      >
        <Text
        style={{
          
          fontWeight:"600",
          fontSize:20
        }}
        >add user</Text>
      </TouchableOpacity>

      <TouchableOpacity
      
        style={ {
          backgroundColor:"#009DAE",
          padding: 10,
          marginTop:20,
          width:320,
        
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20


        }}
        onPress={()=>{deleteData(name)}}
      >
        <Text
        style={{
          
          fontWeight:"600",
          fontSize:20
        }}
        >Delete user</Text>
      </TouchableOpacity>

      <TouchableOpacity
      
        style={ {
          backgroundColor:"#009DAE",
          padding: 10,
          marginTop:20,
          width:320,
        
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20


        }}
        onPress={()=>{deleteAll()}}
      >
        <Text
        style={{
          
          fontWeight:"600",
          fontSize:20
        }}
        >Delete All</Text>
      </TouchableOpacity>

      <TouchableOpacity
      
        style={ {
          backgroundColor:"#009DAE",
          padding: 10,
          marginTop:20,
          width:320,
        
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20


        }}
        onPress={()=>refreshScreen()}
      >
        <Text
        style={{
          
          fontWeight:"600",
          fontSize:20
        }}
        >Refresh</Text>
      </TouchableOpacity>
      <TouchableOpacity
      
        style={ {
          backgroundColor:"#009DAE",
          padding: 10,
          marginTop:20,
          width:320,
        
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20


        }}
        onPress={()=>updateData(name,rollno)}
      >
        <Text
        style={{
          
          fontWeight:"600",
          fontSize:20
        }}
        >Update</Text>
      </TouchableOpacity>
      
      </View>
      

     

   
  );
      }









