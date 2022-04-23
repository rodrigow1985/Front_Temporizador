import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

export class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
        title: 'Este es un título'
    };
  };
  render() {
    return (
      <View>
        <Text>This is the login screen</Text>
        <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export default LoginScreen


const styles = StyleSheet.create({
  usersicon: {
    height: 40,
    width: 40,
    borderRadius: 64,
    marginRight:20
  },
});
