import {useNavigation} from '@react-navigation/native';
import react, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Carousel, Chip, Stepper} from 'react-native-ui-lib';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const width = Dimensions.get('window').width;

const WishList = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [date, setDate] = useState(false);
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      img: require('../../assets/3.jpg'),
      title1: 'Apertment In Houston Texas',
      title2: 'Amsterdam Lifestyle in Houston',
      title3: '1 queen bed Individual Host',
      title4: 'night',
      price: '$230 USD',
    },
  ];
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
        <View>
          <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
            Wishlists
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Chip
              size={{width: 20, height: 30}}
              label={'Date'}
              labelStyle={{color: date ? 'white' : 'grey'}}
              onPress={() => setDate(true)}
              containerStyle={{
                marginRight: 20,
                borderColor: 'lightgrey',
                backgroundColor: date ? 'black' : 'white',
              }}
            />
            <Chip
              size={{width: 20, height: 30}}
              labelStyle={{color: modalVisible ? 'white' : 'grey'}}
              label={'Guest'}
              onPress={() => setModalVisible(true)}
              containerStyle={{
                marginRight: 20,
                borderColor: 'lightgrey',
                backgroundColor: modalVisible ? 'black' : 'white',
              }}
            />
          </View>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}: any) => {
                return (
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('SnappCover')}>
                    <View
                      // onPress={() => navigation.navigate('SnappCover')}
                      style={{
                        marginBottom: 10,
                        marginTop: 20,
                        // backgroundColor: 'red',
                      }}>
                      <Carousel
                        containerStyle={{
                          height: 300,
                        }}
                        // onChangePage={() => console.log('page changed')}
                        loop
                        pageControlProps={{
                          size: 10,
                          containerStyle: {
                            position: 'absolute',
                            bottom: 15,
                            left: '35%',
                          },
                        }}
                        pageControlPosition={Carousel.pageControlPositions.OVER}
                        showCounter>
                        {new Array(5).fill(null).map((element, index) => (
                          <Image
                            style={{
                              width: width,
                              height: 300,
                              // borderRadius: 20,
                            }}
                            source={item?.img}
                          />
                        ))}
                      </Carousel>
                      {/* <Image
                  style={{
                    width: 370,
                    height: 370,
                    borderRadius: 20,
                  }}
                  source={item?.img}
                /> */}
                      <View
                        style={{
                          flexDirection: 'row',
                          // alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: 10,
                          paddingHorizontal: 10,
                        }}>
                        <View>
                          <Text style={{fontSize: 15, color: 'black'}}>
                            {item?.title1}
                          </Text>
                          <Text style={{color: '#999999'}}>{item?.title2}</Text>
                          <Text style={{color: '#999999'}}>{item?.title3}</Text>
                          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                            {item?.price}{' '}
                            <Text style={{color: '#999999'}}>
                              {item?.title4}
                            </Text>
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                          }}>
                          <Image
                            style={{width: 20, height: 20}}
                            source={require('../../assets/u_star.png')}
                          />
                          <Text>4.94</Text>
                        </View>
                      </View>
                      <View style={{position: 'absolute', top: 20, left: 20}}>
                        <TouchableOpacity
                        // onPress={() => {
                        //   if (heart != item?.id) {
                        //     setHeart(item?.id);
                        //     setModalVisible(true);
                        //   } else {
                        //     setHeart(item?.id);
                        //   }
                        // }}
                        >
                          <Entypo
                            name={'heart-outlined'}
                            // name={heart === item?.id ? 'heart' : 'heart-outlined'}
                            size={20}
                            color={'white'}
                            // color={heart === item?.id ? 'red' : 'white'}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                );
              }}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          {/* <Text
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
        </Text> */}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          //   setModalVisible(!modalVisible);
          // }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomColor: 'lightgrey',
                  borderBottomWidth: 1,
                  paddingVertical: 6,
                }}>
                <View style={{width: '20%'}}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 50,
                    }}>
                    <EvilIcons
                      name={modalVisible ? 'close' : 'chevron-left'}
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    width: '60%',
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Guest
                </Text>
                <View style={{width: '20%'}} />
              </View>
              <View style={{padding: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                    paddingVertical: 10,
                  }}>
                  <View>
                    <Text style={{color: 'black'}}>Adults</Text>
                    <Text style={{fontSize: 12}}>ages 13 or above</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Stepper minValue={0} small={true} />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    paddingVertical: 10,
                  }}>
                  <View>
                    <Text style={{color: 'black'}}>Children</Text>
                    <Text style={{fontSize: 12}}>ages 2-12</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Stepper minValue={0} small={true} />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    paddingVertical: 10,
                  }}>
                  <View>
                    <Text style={{color: 'black'}}>Infants</Text>
                    <Text style={{fontSize: 12}}>under 2</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Stepper minValue={0} small={true} />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    paddingVertical: 10,
                  }}>
                  <View>
                    <Text style={{color: 'black'}}>Pets</Text>
                    <Text style={{fontSize: 12}}>
                      Bringing a services animal
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Stepper minValue={0} small={true} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  marginTop: 20,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // backgroundColor: 'red',
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  // borderTopColor: 'lightgrey',
                  // borderTopWidth: 1,
                }}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text
                    style={{textDecorationLine: 'underline', color: 'black'}}>
                    Clear
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => setModalVisible(true)}
                  style={{
                    backgroundColor: 'black',
                    paddingVertical: 8,
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 100,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={{color: 'white'}}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={date}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          //   setModalVisible(!modalVisible);
          // }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomColor: 'lightgrey',
                  borderBottomWidth: 1,
                  paddingVertical: 6,
                }}>
                <View style={{width: '20%'}}>
                  <TouchableOpacity
                    onPress={() => setDate(false)}
                    style={{
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 50,
                    }}>
                    <EvilIcons name={'close'} size={20} color="black" />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    width: '60%',
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Sected Date
                </Text>
                <View style={{width: '20%'}} />
              </View>
              <Calendar
                onDayPress={day => {
                  console.log(
                    '====================================',
                    day.dateString,
                  );
                  setSelected(day.dateString);
                }}
                showWeekNumbers
                markedDates={{
                  [selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: 'orange',
                  },
                }}
              />
              <View
                style={{
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  marginTop: 20,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // backgroundColor: 'red',
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  // borderTopColor: 'lightgrey',
                  // borderTopWidth: 1,
                }}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text
                    style={{textDecorationLine: 'underline', color: 'black'}}>
                    Clear
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => setModalVisible(true)}
                  style={{
                    backgroundColor: 'black',
                    paddingVertical: 8,
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 100,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={{color: 'white'}}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    shadowColor: '#000',
    padding: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    // flex: 1,
    // margin: 20,
    borderRadius: 20,
    width: '100%',
    // padding: 35,
    height: 500,
    padding: 20,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // alignItems: 'center',
    // shadowColor: '#000',
    // padding: 20,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
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
export default WishList;
