import React, { useEffect,useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  Button,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
  Dimensions
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchUsers ,addUsers} from '../../common/src/users/usersSlice';
const Users = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: RootState) => state.users);
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setEmail] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // if (loading) {
  //   return <ActivityIndicator size="large" style={styles.loader} color={"grey"}/>;
  // }

  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.centeredView}>
        <Modal
          transparent={true}
          animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}></Text> */}
            <TextInput
              placeholder={"Enter Name "}
              style={styles.inputBox}
              onChangeText={(text) => {setUserName(text)}}

            />
            <TextInput
              placeholder={"Enter Email "}
              style={styles.inputBox} 
              onChangeText={(text) => {setEmail(text)}}

            />
            <Pressable
              disabled={userName.length === 0 || userName.length === 0}
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                dispatch(addUsers({
                  name:userName,
                  job:userEmail
                }));
                setModalVisible(!modalVisible)}}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
        </Modal>
      </View>
      <Button title={'Add User'} onPress={() => {setModalVisible(true)}} />
      {users.map((user) => {
        return (
          <View style={styles.container} key={user.id}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View>
              <View style={styles.dataContainer}>
                <Text>Name: </Text>
                <Text>{user.first_name}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text>Last Name: </Text>
                <Text>{user.last_name}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text>Email: </Text>
                <Text>{user.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10
  },
  dataContainer: {
    flexDirection: 'row'
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  mainContainer: {
    padding: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop:20,
    
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft:30,
    marginRight:30
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  inputBox:{
    marginTop:10,
    borderWidth:1,
    borderColor:"grey",
    borderRadius:5,
    width:Dimensions.get('screen').width/2
  }
});