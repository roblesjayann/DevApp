import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Platform, Button, StatusBar, Alert, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';

export default function App() { function myname(event) {
console.log(event.target.value);
}
  return (
    <View style={styles.mainContainer}>
    <View style={styles.studDataContainer}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: 'pink', fontSize:20, fontStyle: 'Times New Roman' }}> Student Data </Text>
      <Text> Student ID: </Text>
      <TextInput 
      placeholder="" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      multiline={true}
      />
      <Text> Gender: </Text>
      <TextInput
      placeholder="FEMALE" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      />
      <Text> First Name: </Text>
      <TextInput
      placeholder="JAY-ANN" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      multiline={true}
      onChange={myname}
      />
      <Text> Middle Name: </Text>
      <TextInput
      placeholder="B." 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      />
      <Text> Surname: </Text>
      <TextInput
      placeholder="ROBLES" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      />
      <Text> Cellphone No.: </Text>
      <TextInput
      placeholder="09154727974" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      />
      <Text> Address: </Text>
      <TextInput
      placeholder="PUROK-1, TIAMAN, BONIFACIO, MISAMIS OCCIDENTAL" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      />
      <Text style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: 'pink', fontSize:20}}> Emergency Contact </Text>
      <Text> Guardian/Parent: </Text>
      <TextInput 
      placeholder="SOFIA B. ROBLES" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      multiline={true}
      />
      <Text> Cellphone No.: </Text>
      <TextInput 
      placeholder="09383024669" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      multiline={true}
      />
      <Text> Address: </Text>
      <TextInput
      placeholder="PUROK-1, TIAMAN BONIFACIO, MISAMIS OCCIDENTAL" 
      style={styles.fnameTextInput}
      allowFontScaling={false}
      autoCapitalize="words"
      autoCorrect={true}
      />
      <View>
      <Button 
      title="Submit"
      color="#008000"
      onPress={() => Alert(alert('DATA HAS BEEN SUBMITTED'))}
      />
      </View>
      <View>
      <Button 
      title="Cancel"
      color="#ffa500"
      onPress={() => Alert(alert('DATA HAS BEEN CANCELLED'))}
      />
      </View>
    </View>
    </View>
 );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    backgroundColor: '#ccffff',
  },
  studDataContainer: {
  flex: 2,
  backgroundColor: '#ccffff',
  },
  fnameTextInput: {
    margin: 4,
    borderWidth: 3,
    padding: 4,
    borderRadius: 4,
  },
});

