import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

function InputTime () {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setTime(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  return (
    <View style={styles.inputTimeContainer}>
        <View style={styles.pickedTimeContainer}>
            <Text style={styles.pickedTime}>{time.getHours() + ":" + time.getMinutes()}</Text>
        </View>
        {/* The button that used to trigger the date picker */}
        {!isPickerShow && (
        <View style={styles.iconTimeButtonContainer}>
            {/* Icon.Button Component */}
            <Icon.Button
                style={styles.iconTimeButton}
                name="time-outline"
                backgroundColor="white"
                color="grey"
                onPress={showPicker}>
            </Icon.Button>
        </View>
        )}
        {/* The date picker */}
        {isPickerShow && (
            <DateTimePicker
                value={time}
                mode={'time'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                onChange={onChange}
            />
        )}
    </View>
  );
}

export default InputTime;

const styles = StyleSheet.create({
  inputTimeContainer: {
    flex: 1,
    flexDirection:'row',
    //width: window.width,
    alignItems:'center',
    borderWidth: 1,
    borderColor:'#999',
    borderRadius:10, 
    backgroundColor:'#fff',
    height: 50,
  },
  pickedTimeContainer: {
    flex: 3,
  },
  iconTimeButtonContainer: {
    flex: 2,
  },
  pickedTime: {
    fontSize: 18,
    color: 'grey',
    margin: 10,
    textAlign:'right',
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  // ICON
  iconTimeButton: {
    //marginTop: 16,
    //marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
