import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import {useNavigation} from '@react-navigation/native';
export default function PaymentProfile({route}) {
  const navigation = useNavigation();

  const Checkout = () => {
    var options = {
      description: 'Food Payment Bill',
      image: '',
      currency: 'INR',
      key: 'rzp_test_ihyN942As43mJi',
      amount: '200',
      name: 'Food Chef',
      prefill: {
        email: 'aviashishranjangmail.com',
        contact: '6206416452',
        name: 'Ashish Ranjan',
      },

      theme: {color: '#53a20e'},
    };

    RazorpayCheckout.open(options)

      .then(data => {
        console.log('Success:', data.razorpay_payment_id);
        navigation.navigate('TrackOrder');
      })
      .catch(error => {
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.title}>All Payment Method</Text>
      <Text style={Styles.method}> Select One of the payment Method</Text>
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
          marginVertical: 15,
          padding: 12,
          borderRadius: 15,
          backgroundColor: '#9d95cd',
        }}
        onPress={() =>
          Alert.alert('Oder Confirmation', 'Order successful👏👏👏', [
            {
              text: 'Track Order',
              onPress: () => {
                navigation.navigate('TrackOrder');
              },
            },
          ])
        }>
        <Text style={{fontSize: 20, textAlign: 'center', padding: 12}}>
          Cash On Delivery
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
          marginVertical: 15,
          padding: 12,
          borderRadius: 15,
          backgroundColor: '#9d95cd',
        }}
        onPress={Checkout}>
        <Text style={{fontSize: 20, textAlign: 'center', padding: 12}}>
          Online Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const Styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    padding: 12,
    fontWeight: 'bold',
  },
  method: {
    marginHorizontal: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#9d95cd',
    padding: 12,
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
