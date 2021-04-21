import * as React from 'react';
import {View,StyleSheet,TextInput,TouchableOpacity,Text,ToastAndroid,KeyboardAvoidingView,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Writestory extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:'',

        };
    }

    SubmitStory=async()=>{
      db.collection("Stories").doc(this.state.title).set({
        'title':this.state.title,
        'author':this.state.author,
        'story':this.state.story,

      })
      ToastAndroid.show("Story Submitted",ToastAndroid.SHORT)
      //Alert.alert("Story Submitted!!");
      this.setState({
        title : '',
        author : '',
        story : ''
      });
    }

    render(){
        return (
            <KeyboardAvoidingView behavior="padding" enabled>
                <Text style={styles.header}>Story Hub</Text>
    <TextInput
        style={styles.input}
        placeholder="Story Title"
        onChangeText = {(text)=>{this.setState({title: text})}}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        onChangeText = {(text)=>{this.setState({author: text})}}
      />
        <TextInput
        style={styles.input}
        multiline={true}
        placeholder="Write Your Story Here..."
        onChangeText = {(text)=>{this.setState({story: text})}}
      />
        <TouchableOpacity style={styles.button}onPress={()=>{this.SubmitStory()}}>
            <Text>SUBMIT</Text>
        </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    head:{
        textAlign: 'center', 
        fontSize: 50, 
        backgroundColor: '#FFC0CB', 
        padding: 20,
      },
      input: {
        alignSelf:'center',
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        paddingLeft:15,
        marginTop:25
      },
    button:{
        backgroundColor:'red',
        alignItems:'center',
        borderWidth:2,
        borderRadius:20,
        alignSelf:'center',
        padding:10,
        marginTop:10
    },

  });