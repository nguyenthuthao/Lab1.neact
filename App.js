import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

export default class App extends React.Component{
    render() {
        return(
            <Router>
            <Stack key="root" hideNavBar={true}>
              <Scene key="login" component={Login} title="Login"/>
              <Scene key="signup" component={Signup} title="Signup"/>
              <Scene key="home" component={Home} title="Home"/>
            </Stack>
          </Router>
        );
        
    }
}
const styles = StyleSheet.create({
    container:{
      backgroundColor: '#78909c',
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    }
)

