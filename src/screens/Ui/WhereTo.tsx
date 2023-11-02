import {Button, LeftIconBtn} from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Chip, ExpandableSection, Stepper, TextField} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CalendarPicker from 'react-native-calendar-picker';
import tw from 'twrnc';

const WhereTo = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [top, setTop] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(true);
  const [selected, setSelected] = useState('');
  const [conditionState, setConditionState] = useState('Choose dates');
  const minDate = new Date(); // Today
  const maxDate = new Date(2017, 6, 3);
  const [state, setState] = useState<{
    selectedStartDate: Date;
    selectedEndDate: Date | null;
    days: number;
  }>({
    selectedStartDate: new Date(),
    selectedEndDate: new Date(),
    days: 1,
  });
  const onDateChange = (date: any, type: string) => {
    if (type === 'END_DATE') {
      setState(prev => ({...prev, selectedEndDate: date}));
    } else {
      setState(prev => ({
        ...prev,
        selectedStartDate: date,
        selectedEndDate: null,
      }));
    }
  };

  const data1 = [
    {
      name: "I'm Flexible",
      img: require('@assets/bgimage.png'),
      bgcolor: '#FC6171',
    },
    {
      name: 'Europe',
      img: require('@assets/bgimage.png'),
      bgcolor: '#30BDB2',
    },
    {
      name: 'Japon',
      img: require('@assets/bgimage.png'),
      bgcolor: 'black',
    },
  ];
  const date = [
    {
      id: 1,
      month: 'Februery',
      year: 2023,
    },
    {
      id: 2,
      month: 'March',
      year: 2023,
    },
    {
      id: 3,
      month: 'April',
      year: 2023,
    },
    {
      id: 4,
      month: 'May',
      year: 2023,
    },
  ];
  const getBodyElement = () => {
    return (
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: '#ebebeb',
            borderRadius: 20,
            width: '80%',
            alignSelf: 'center',
            padding: 5,
          }}>
          <TouchableOpacity
            onPress={() => setConditionState('Choose dates')}
            style={{
              backgroundColor:
                conditionState === 'Choose dates' ? 'white' : '#ebebeb',
              paddingHorizontal: 10,
              width: '50%',
              paddingVertical: 5,
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
              }}>
              Choose dates
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setConditionState('flexible')}
            style={{
              backgroundColor:
                conditionState === 'Choose dates' ? '#ebebeb' : 'white',
              paddingHorizontal: 10,
              paddingVertical: 5,
              width: '50%',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
              }}>
              i'm flexible
            </Text>
          </TouchableOpacity>
        </View>
        {conditionState === 'Choose dates' ? (
          <>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              selectedStartDate={state.selectedStartDate}
              selectedEndDate={state.selectedEndDate}
              minDate={minDate}
              // maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="black"
              selectedDayTextColor="#FFFFFF"
              onDateChange={onDateChange}
            />
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: 'lightgrey',
                paddingVertical: 12,
                marginTop: 10,
              }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 2,
                  }}>
                  <Chip
                    righ
                    size={{width: 20, height: 30}}
                    label={'Exact date'}
                    onPress={() => console.log('pressed', 'Exact date')}
                    // containerStyle={{marginRight: 20, borderColor: 'Yellow'}}
                    containerStyle={{
                      borderColor: 'lightgrey',
                      borderBottomRightRadius: 0,
                      marginRight: 20,
                    }}
                  />
                  <Chip
                    size={{width: 20, height: 30}}
                    label={'± 1 day'}
                    onPress={() => console.log('pressed')}
                    containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                  />
                  <Chip
                    size={{width: 20, height: 30}}
                    label={'± 2 day'}
                    onPress={() => console.log('pressed')}
                    containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                  />
                  <Chip
                    size={{width: 20, height: 30}}
                    label={'± 3 day'}
                    onPress={() => console.log('pressed')}
                    containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                  />
                  <Chip
                    size={{width: 20, height: 30}}
                    label={'± 4 day'}
                    onPress={() => console.log('pressed')}
                    containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                  />
                  <Chip
                    size={{width: 20, height: 30}}
                    label={'± 5 day'}
                    onPress={() => console.log('pressed')}
                    containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                  />
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 8,
                paddingHorizontal: 20,
                marginTop: 10,
                borderTopColor: 'lightgrey',
                borderTopWidth: 1,
              }}>
              <TouchableOpacity onPress={() => setExpanded(false)}>
                <Text style={{textDecorationLine: 'underline', color: 'black'}}>
                  Skip
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                // onPress={() => setModalVisible(true)}
                style={{
                  backgroundColor: 'black',
                  paddingVertical: 8,
                  alignItems: 'center',
                  borderRadius: 10,
                  width: 100,
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: 'white'}}>Next</Text>
              </TouchableOpacity> */}
              <Button
                // onPress={() => navigation.navigate('MyTabs')}
                style={{marginTop: 20, paddingVertical: 10, width: 100}}
                title={'Next'}
              />
            </View>
          </>
        ) : (
          <>
            <View style={{padding: 10}}>
              <View
                style={{
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  marginTop: 20,
                }}
              />
              <View style={{padding: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: 10,
                  }}>
                  Stay for a week
                </Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal> */}
                  <Chip
                    size={{width: 20, height: 30}}
                    label={'Weekend'}
                    onPress={() => console.log('pressed')}
                    containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                  />
                  <Chip
                    size={{width: 20, height: 30}}
                    label={'Week'}
                    onPress={() => console.log('pressed')}
                    containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                  />
                  <Chip
                    size={{width: 20, height: 30}}
                    label={'Month'}
                    onPress={() => console.log('pressed')}
                    containerStyle={{borderColor: 'lightgrey'}}
                  />
                  {/* </ScrollView> */}
                </View>
                <View
                  style={{
                    borderColor: 'lightgrey',
                    borderWidth: 1,
                    marginTop: 20,
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  Go anyTime
                </Text>
                <FlatList
                  data={date}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          flex: 1,
                          width: 100,
                          height: 100,
                          borderWidth: 1,
                          borderColor: 'lightgrey',
                          borderRadius: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginRight: 10,
                        }}>
                        <View style={{alignItems: 'center'}}>
                          <AntDesign name="calendar" size={25} />
                          <Text
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              marginTop: 5,
                            }}>
                            {item.month}
                          </Text>
                          <Text>{item.year}</Text>
                        </View>
                      </View>
                    );
                  }}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderTopColor: 'lightgrey',
                borderTopWidth: 1,
              }}>
              <TouchableOpacity onPress={() => setExpanded(false)}>
                <Text style={{textDecorationLine: 'underline', color: 'black'}}>
                  Skip
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                // onPress={() => setModalVisible(true)}
                style={{
                  backgroundColor: 'black',
                  paddingVertical: 8,
                  alignItems: 'center',
                  borderRadius: 10,
                  width: 100,
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: 'white'}}>Next</Text>
              </TouchableOpacity> */}
              <Button
                // onPress={() => navigation.navigate('MyTabs')}
                style={{marginTop: 20, paddingVertical: 10, width: 100}}
                title={'Next'}
              />
            </View>
          </>
        )}
      </View>
    );
  };
  const BodyElement = () => {
    return (
      <View style={{padding: 10}}>
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
            <Text style={{fontSize: 12}}>Bringing a services animal</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Stepper minValue={0} small={true} />
          </View>
        </View>
      </View>
    );
  };
  const Body = () => {
    return (
      <View>
        <View>
          <View
            style={{
              borderRadius: 10,
              width: '100%',
              padding: 20,
              backgroundColor: 'white',
              // shadowColor: '#000',
              // shadowOffset: {
              //   width: 0,
              //   height: 2,
              // },
              // shadowOpacity: 0.25,
              // shadowRadius: 3.84,

              // elevation: 5,
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                // disabled={true}
                onPress={() => setModalVisible(true)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  height: 48,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 12,
                  backgroundColor: '#FBFBFB',
                }}>
                <Image
                  style={{width: 20, height: 20, marginRight: 10}}
                  source={require('@assets/icon.png')}
                />
                <TextField
                  editable={false}
                  style={{
                    height: 35,
                    width: '92%',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  placeholder="search..."
                />
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data1}
              renderItem={({item}) => {
                return (
                  <View style={{}}>
                    <TouchableOpacity
                      // onPress={() => navigation.navigate('Property')}
                      style={{
                        width: 120,
                        borderRadius: 10,
                        paddingVertical: 14,
                        // backgroundColor: 'red',
                        marginRight: 20,
                      }}>
                      <Image
                        resizeMode="cover"
                        style={{
                          width: 130,
                          height: 130,
                          borderRadius: 10,
                        }}
                        source={item?.img}
                      />
                      <Text style={{color: 'black', marginTop: 10}}>
                        {item?.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderWidth: 1,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            borderColor: 'lightgrey',
          }}>
          <EvilIcons
            name={modalVisible ? 'close' : 'chevron-left'}
            size={20}
            color="black"
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              marginRight: 20,
              borderBottomWidth: 1,
              paddingVertical: 4,
            }}>
            <Text style={{color: 'black'}}>Stays</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{marginRight: 20}}>
            <Text>Experiences</Text>
          </TouchableOpacity> */}
        </View>
        <View />
      </View>
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={{padding: 10}}
            showsVerticalScrollIndicator={false}>
            <View style={tw`gap-4`}>
              <View style={tw`shadow-lg  bg-white rounded-lg`}>
                <ExpandableSection
                  top={top}
                  expanded={expanded2}
                  sectionHeader={
                    !expanded2 ? (
                      <View
                        style={tw`w-full flex-row items-center justify-between p-6`}>
                        <Text
                          style={{
                            color: 'grey',
                            //   fontSize: 25,
                            fontWeight: 'bold',
                            //   marginBottom: 20,
                          }}>
                          Where
                        </Text>
                        {/* <Text
                        style={{
                          color: 'black',
                          //   fontSize: 25,
                          fontWeight: 'bold',
                          //   marginBottom: 20,
                        }}>
                        Any week
                      </Text> */}
                      </View>
                    ) : (
                      <>
                        <View
                          style={{
                            // borderRadius: 10,
                            width: '100%',
                            padding: 10,
                            backgroundColor: 'white',
                            shadowRadius: 3.84,
                            paddingVertical: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 20,
                            marginBottom: 10,
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 25,
                              fontWeight: 'bold',
                              //   marginBottom: 20,
                            }}>
                            Where To?
                          </Text>
                        </View>
                      </>
                    )
                  }
                  onPress={() => {
                    if (expanded2) {
                      setExpanded2(false);
                    } else {
                      setExpanded1(false);
                      setExpanded(false);
                      setExpanded2(true);
                    }
                  }}>
                  {Body()}
                </ExpandableSection>
              </View>
              <View style={tw`shadow-lg  bg-white rounded-lg`}>
                <ExpandableSection
                  top={top}
                  expanded={expanded}
                  sectionHeader={
                    !expanded ? (
                      <View
                        style={tw`w-full flex-row items-center justify-between p-6`}>
                        <Text
                          style={{
                            color: 'grey',
                            //   fontSize: 25,
                            fontWeight: 'bold',
                            //   marginBottom: 20,
                          }}>
                          When
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            //   fontSize: 25,
                            fontWeight: 'bold',
                            //   marginBottom: 20,
                          }}>
                          Any week
                        </Text>
                      </View>
                    ) : (
                      <View
                        style={{
                          // borderRadius: 10,
                          width: '100%',
                          padding: 10,
                          backgroundColor: 'white',
                          shadowRadius: 3.84,
                          paddingVertical: 20,
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingHorizontal: 20,
                          marginBottom: 10,
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 25,
                            fontWeight: 'bold',
                            //   marginBottom: 20,
                          }}>
                          When's your trip?
                        </Text>
                      </View>
                    )
                  }
                  onPress={() => {
                    if (expanded) {
                      setExpanded(false);
                    } else {
                      setExpanded1(false);
                      setExpanded2(false);
                      setExpanded(true);
                    }
                  }}>
                  {getBodyElement()}
                </ExpandableSection>
              </View>
              <View style={tw`shadow-lg  bg-white rounded-lg`}>
                <ExpandableSection
                  top={top}
                  expanded={expanded1}
                  sectionHeader={
                    !expanded1 ? (
                      <View
                        style={tw`w-full flex-row items-center justify-between p-6`}>
                        <Text
                          style={{
                            color: 'grey',
                            //   fontSize: 25,
                            fontWeight: 'bold',
                            //   marginBottom: 20,
                          }}>
                          Who
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            //   fontSize: 25,
                            fontWeight: 'bold',
                            //   marginBottom: 20,
                          }}>
                          Add guest
                        </Text>
                      </View>
                    ) : (
                      <View
                        style={{
                          width: '100%',
                          padding: 10,
                          backgroundColor: 'white',
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingHorizontal: 20,
                          marginBottom: 5,
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            //   fontSize: 25,
                            fontWeight: 'bold',
                            fontSize: 25,
                            //   marginBottom: 20,
                          }}>
                          Who's coming?
                        </Text>
                      </View>
                    )
                  }
                  onPress={() => {
                    if (expanded1) {
                      setExpanded1(false);
                    } else {
                      setExpanded(false);
                      setExpanded2(false);
                      setExpanded1(true);
                    }
                  }}>
                  {BodyElement()}
                </ExpandableSection>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 8,
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity>
            <Text style={{color: 'black', textDecorationLine: 'underline'}}>
              Clear All
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            // onPress={() => setModalVisible(true)}
            style={{
              backgroundColor: 'rgb(183, 43, 95)',
              paddingVertical: 10,
              alignItems: 'center',
              borderRadius: 10,
              width: 130,
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <EvilIcons
              name="search"
              size={20}
              style={{marginRight: 10}}
              color="white"
            />
            <Text style={{color: 'white'}}>Search</Text>
          </TouchableOpacity> */}
          <LeftIconBtn
            Lefticon={
              <EvilIcons
                name="search"
                size={20}
                style={{marginRight: 10}}
                color="white"
              />
            }
            title={'Search'}
          />
        </View>
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
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                borderWidth: 1,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                borderColor: 'lightgrey',
              }}>
              <EvilIcons
                name={modalVisible ? 'close' : 'chevron-left'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  marginRight: 20,
                  borderBottomWidth: 1,
                  paddingVertical: 4,
                }}>
                <Text style={{color: 'black'}}>Stays</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{marginRight: 20}}>
                <Text>Experiences</Text>
              </TouchableOpacity> */}
            </View>
            <View />
          </View>
          <View style={styles.modalView}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // flex: 1,
                  // height: 50,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 7,
                  backgroundColor: '#FBFBFB',
                  overflow: 'hidden',
                }}>
                {/* <Image
                  style={{width: 20, height: 20, marginRight: 10}}
                  source={require('@assets/icon.png')}
                /> */}
                {/* <TextField
                  style={{
                    height: 35,
                    width: '92%',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  placeholder="search..."
                /> */}
                <GooglePlacesAutocomplete
                  fetchDetails={true}
                  debounce={400}
                  // renderLeftButton={() => {
                  //   <Image
                  //     style={{width: 20, height: 20, marginRight: 10}}
                  //     source={require('@assets/icon.png')}
                  //   />;
                  // }}
                  styles={{
                    TextFieldContainer: {
                      width: '100%',
                      // borderColor: 'lightgrey',
                      // borderWidth: 1,
                      borderRadius: 10,
                    },
                    TextField: {
                      width: '80%',
                      // height: 40,
                      backgroundColor: '#FBFBFB',
                      alignItems: 'center',
                    },
                  }}
                  placeholder="Search..."
                  TextFieldProps={{autoFocus: true}}
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                  }}
                  query={{
                    // key: GOOGLE_API,
                    key: 'AIzaSyClYAkI28o4JC8de56LH0xpNWtX-TWIKr4',
                    language: 'en',
                  }}
                />
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Recend searches
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#f1f1f1',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign name="clockcircleo" size={20} />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 12, color: 'black'}}>
                    Ho chi Minh. stay
                  </Text>
                  <Text style={{fontSize: 12}}>Any week</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    shadowColor: '#000',
    backgroundColor: 'white',
  },
  modalView: {
    flex: 1,
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
export default WhereTo;
