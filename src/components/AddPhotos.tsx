import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {LeftIconBtn} from './Button';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const AddPhotos = ({pickImg, setInput, input}: any) => {
  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <View
          style={{
            borderWidth: 1,
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            borderStyle: 'dashed',
          }}>
          <Feather name="image" size={50} color={'black'} />
          <Text style={{textAlign: 'center', marginTop: 30}}>
            Drag and drop the images to customize the gallery order. Click on
            the star icon to set the featured image
          </Text>
          <Text>(Minimum size 1440 x 900 px)</Text>
          <LeftIconBtn
            onPress={pickImg}
            style={{
              width: '60%',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'center',
              paddingVertical: 15,
            }}
            Lefticon={
              <Feather
                name="upload"
                size={20}
                style={{marginRight: 10}}
                color="white"
              />
            }
            title={'Select and upload'}
          />
        </View>
        <FlatList
          numColumns={3}
          data={input?.image}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: 20,
                  borderRadius: 5,
                  overflow: 'hidden',
                  marginRight: 12,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  width: 115,
                  height: 115,
                }}>
                <Image
                  style={{width: 115, height: 115}}
                  source={{uri: item?.path}}
                />
                <TouchableOpacity
                  onPress={() => {
                    const img = input?.image?.filter(function (i: any) {
                      return i !== index;
                    });
                    const myState = {...input};

                    [...input?.image, (myState.image = img)];

                    setInput(myState);
                    // setImage(img);
                  }}
                  style={{
                    position: 'absolute',
                    top: 3,
                    right: 3,
                    width: 12,
                    height: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: 50,
                  }}>
                  <Fontisto name="close-a" size={5} color={'red'} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddPhotos;
