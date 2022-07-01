import { Alert, Modal, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { styles } from "./styles";

const AddItemModal = ({ food, onHandlerAddToCart }) => {
  const[modalVisible, setModalVisible] = useState(false);

  const addFoodHandler = (food) => {
    onHandlerAddToCart();
    setModalVisible(!modalVisible);
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Item added to your order");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{food.name}</Text>
            <Text style={styles.modalText}>Added in your order!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => addFoodHandler()}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onHandlerAddToCart={() => onHandlerAddToCart()}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
};

export default AddItemModal;