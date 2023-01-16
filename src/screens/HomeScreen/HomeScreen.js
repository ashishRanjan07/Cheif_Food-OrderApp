import {
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeadNav from '../../../components/HomeHeadNav';
import Categories from '../../../components/Categories';
import OfferSlider from '../../../components/OfferSlider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../globals/style';
import RestaurantList from '../../../components/RestaurantList';
import RestaurantsData from '../../../Data/zomato.json';
import CountryCode from '../../../Data/CountryCode.json';

export default function HomeScreen() {
  const [searchText, SetSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(RestaurantsData);

  const searchRestaurants = () => {
    CountryCode.map(itemCountryCode => {
      if (searchText.toLowerCase() == itemCountryCode.Country.toLowerCase()) {
        setRestaurants(pastRestaurants => {
          return pastRestaurants.filter(
            item => item.Country_Code == itemCountryCode.Country_Code,
          );
        });
      } else if (searchText == '') {
        setRestaurants(RestaurantsData);
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'red'} />
      <HomeHeadNav />

      <View style={styles.searchbox}>
        <TextInput
          placeholder="search"
          style={styles.input}
          onChangeText={e => SetSearchText(e)}
        />
        <TouchableOpacity onPress={() => searchRestaurants()}>
          <FontAwesome
            name="search"
            size={24}
            color="black"
            style={styles.searchicon}
          />
        </TouchableOpacity>
      </View>
      <Categories />
      <OfferSlider />
      <RestaurantList restaurants={restaurants} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    alignItems: 'center',
    width: '100%',
  },
  searchicon: {
    color: colors.text1,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    fontSize: 18,
    color: colors.text1,
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
  },
});
