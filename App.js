// import React from 'react';
// import {View, Button} from 'react-native';
// import RazorpayCheckout from 'react-native-razorpay';
// export default function App() {
//   const makePayment = () => {
//     var options = {
//       description: 'Credits towards consultation',
//       image: 'https://i.imgur.com/3g7nmJC.png',
//       currency: 'INR',
//       key: 'rzp_test_ihyN942As43mJi', // Your api key
//       amount: '5000',
//       name: 'foo',
//       prefill: {
//         email: 'void@razorpay.com',
//         contact: '9191919191',
//         name: 'Razorpay Software',
//       },
//       theme: {color: '#F37254'},
//     };
//     RazorpayCheckout.open(options)
//       .then(data => {
//         // handle success
//         alert(`Success: ${data.razorpay_payment_id}`);
//       })
//       .catch(error => {
//         // handle failure
//         alert(`Error: ${error.code} | ${error.description}`);
//       });
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Button title="Make Payment" onPress={makePayment} />
//     </View>
//   );
// }
import {StyleSheet} from 'react-native';
import RootNavigation from './src/RootNavigation';

export default function App() {
  return <RootNavigation />;
}
