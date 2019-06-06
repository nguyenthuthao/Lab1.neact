import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
export default class Signup extends React.Component{

    goBack(){
        Actions.pop()
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>WELLCOME</Text>
                <Image style={styles.logo}
                source={require('../assets/logo.png')}/>
                <View style= {styles.inputBox}>
                <Image source={require('../assets/iconEmail.png')} style={styles.ImageStyle} />
                <TextInput
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#ffffff"
                    keyboardType="email-address"
                    selectionColor='#ffff'
                    onSubmitEditing={()=>this.password.focus()}/>
                </View>
                <View style= {styles.inputBox}>
                <Image source={require('../assets/iconPassword.png')} style={styles.ImageStyle} />
                <TextInput
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    ref={(input)=> this.password = input}/>
                </View>
                <View style= {styles.inputBox}>
                <Image source={require('../assets/iconPassword.png')} style={styles.ImageStyle} />
                <TextInput
                    placeholder="RePassword"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    ref={(input)=> this.password = input}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.goBack}>
                    <Text style={styles.btnText}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <Text style={styles.signupBtn}>Sign in</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#78909c',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        color: 'white', 
        fontSize: 24, 
        textAlign:'center',
    },
    logo:{
        marginVertical: 15,
        width: 50,
        height: 50,
    },
    inputBox:{
        flexDirection: 'row',
        width: 300,
        height: 50,
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 10,
        fontSize: 16,
        color:'#ffffff',
        marginVertical: 10,
    },
    ImageStyle: {
        paddingVertical: 15,
        marginVertical: 10,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    btnText:{
        fontSize: 18,
        color:'#ffffff',
        textAlign:'center',
        fontWeight:'bold',
    },
    button:{
        width: 125,
        marginVertical: 10,
        backgroundColor:'#4b636e',
        height: 50,
        borderRadius: 25,
        paddingVertical: 10,
    },
    signupTextCont:{
        alignItems:'flex-end',
        justifyContent:'center',
        marginVertical: 16,
        flexDirection:'row',
    },
    signupText:{
        color:'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
    },
    signupBtn:{
        color:'#ffffff',
        fontSize: 16,
        fontWeight:'500',
    },
}
)