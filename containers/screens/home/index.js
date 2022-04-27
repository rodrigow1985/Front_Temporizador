import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert
} from 'react-native';
import InputTime from '../../components/input-time';
import Icon from 'react-native-vector-icons/Ionicons';
function HomeScreen ({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelTime}>Seleccione hora de encendido</Text>
        </View>
        <View style={styles.inputTimeContainer}>
          <InputTime />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelTime}>Seleccione hora de apagado</Text>
        </View>
        <View style={styles.inputTimeContainer}>
          <InputTime />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelTime}>Automático</Text>
        </View>
        <View style={styles.inputTimeContainer}>
          
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconTimeButtonContainer}>
            {/* Icon.Button Component */}
            <Icon.Button
                style={styles.iconTimeButton}
                title="Guardar cambios"
                name="save-outline"
                backgroundColor="#eee"
                color="grey"
                onPress={() => Alert.alert("Save button pressed")}>
                  <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#000'}}>Guardar cambios</Text> 
            </Icon.Button>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
  inputTimeContainer: {
    flex: 2,
    marginLeft: 10,
    justifyContent: 'center',
    /* borrar */
    height: 50,
  },
  labelContainer: {
    flex: 2,
    marginLeft: 10,
  },
  labelTime: {
    textAlign: 'right',
  },
});
