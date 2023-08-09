import react from 'react';
import {View, Text} from 'react-native';

const WishList = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View>
        <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
          Wishlists
        </Text>
        <Text
          style={{
            color: 'black',
            marginTop: 50,
            fontSize: 19,
            fontWeight: '600',
          }}>
          Create your first wishlist
        </Text>
        <Text style={{fontSize: 15, width: '90%'}}>
          As you search, tab the heart icon to save your favorite places to stay
          or things to do to a wishlist{' '}
        </Text>
      </View>
    </View>
  );
};
export default WishList;
