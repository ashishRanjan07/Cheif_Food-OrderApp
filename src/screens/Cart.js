import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Cart({route}) {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const {item} = route.params;
  const menuItem = item.Cuisines.split(', ');
  // console.log(item);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.infoStyle}>
          <View style={{height: 'auto', margin: 15, padding: 15}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
              Delivery Location
            </Text>
            <Text style={{fontSize: 18, padding: 10, fontStyle: 'italic'}}>
              Village- Bairiya, Post - Bairiya, Opposite of Adarsh Nursing Home
              Near Durga Mandir Pincode - 800007,Patna Bihar India
            </Text>
          </View>
          <View
            style={{
              display: 'flex',

              marginHorizontal: 10,
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', marginHorizontal: 10}}>
              Order From
            </Text>
            <Text style={{fontSize: 18, marginHorizontal: 10}}>
              Restaurant Address : - {item.Address}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        data={menuItem}
        renderItem={({item, index}) => (
          <View style={[styles.cardContainer, styles.icon]}>
            <Text
              style={
                (styles.titleStyle,
                {
                  padding: 15,
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                })
              }>
              {item}
            </Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color="black"
              style={{marginVertical: 20, color: '#9d95cd'}}
              onPress={() => setCount(count + 1)}
            />
            <Text style={{marginVertical: 20}}>{count}</Text>
            <AntDesign
              name="minuscircleo"
              size={24}
              color="black"
              style={{marginVertical: 20, color: '#9d95cd'}}
              onPress={() => {
                if (count == 0) {
                  setCount(0);
                } else {
                  setCount(count - 1);
                }
              }}
            />
          </View>
        )}
      />

      <TouchableOpacity
        style={{alignItems: 'center', backgroundColor: '#9d95cd'}}
        onPress={() => navigation.navigate('PaymentProfile', {count})}>
        <Text style={styles.textStyle}>
          Proceed To Pay {count} X {item.Average_Cost_for_two}=
          {item.Average_Cost_for_two * count}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 20,
    height: 'auto',
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: deviceWidth - 20,
    height: 300,
    borderRadius: 20,
    opacity: 0.8,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
  address: {
    fontSize: 18,
    fontWeight: '300',
    width: '60%',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    padding: 12,
    backgroundColor: '#6666FF',
  },
});
