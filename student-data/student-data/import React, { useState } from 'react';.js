import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  RefreshControl,
  Platform,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([
      ...myItem,
      {
        Item: 'Item',
      },
    ]);
    setRefreshing(false);
  };
  const [myItem, setItems] = useState([{ Item: 'Item' }, { Item: 'Item' }]);
  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Times New Roman',
              }}>
              My Modal
            </Text>
            <Image
              source={require('./assets/soldier.jpg')}
              style={styles.logo}
            />
            <Button
              title="close"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <FlatList
        data={myItem}
        renderItem={({ item }) => <Text style={styles.items}>{item.Item}</Text>}
        refreshControl={
          <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} colors = {['blue']} progressBackgroundColor= 'white'/>

        }></FlatList>
      <View>
        <Button
          title="Press Me"
          color="green"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#eca1a6',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
    margin: 20,
  },
  logo: {
    width: 100,
    height: 150,
    justifyContent: 'center',
    padding: 15,
    margin: 15,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 5,
    margin: 90,
  },
  items: {
    flex: 2,
    backgroundColor: '#ccffff',
    margin: 4,
    borderWidth: 3,
    padding: 4,
    borderRadius: 4,
  },
});
