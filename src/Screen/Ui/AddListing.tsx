import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {} from 'react-native';
import {Header} from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {
  Checkbox,
  ProgressBar,
  RadioButton,
  Stepper,
  Wizard,
  TextField,
} from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SelectDropdown from 'react-native-select-dropdown';
import {Button, LeftIconBtn} from '../../components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import {FlatList} from 'react-native';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Calendar} from 'react-native-calendars';
import RadioBtn from '../../components/RadioBtn';
import CheckBoxBtn from '../../components/CheckBoxBtn';
const AddListing = () => {
  const countries = [
    'None',
    'Apartment',
    'Bed & breakfast',
    'Condo',
    'House',
    'Loft',
    'Studio',
  ];
  const weekend = [
    'Saturday and Sunday',
    'Friday and Saturday',
    'Friday, Saturday and Sunday',
  ];
  const guestType = [
    'Single Fee',
    'Per Night',
    'Per Guest',
    'Per Night Per Guest',
  ];
  const policy = ['Select Cancellation Policy'];
  const navigation = useNavigation();
  const [selectCode, setSelectCode] = useState('None');
  const [selectPolicy, setSelectPolicy] = useState(
    'Select Cancellation Policy',
  );
  const [selectGuestType, setSelectGuestType] = useState('Single Fee');
  const [selectWeekend, setSelectWeekend] = useState('Saturday and Sunday');
  const [selected, setSelected] = useState('');
  const [progress, setProgress] = useState(0);
  //   const [condition, setCondition] = useState('');
  const [condition, setCondition] = useState('Information');
  // const [image, setImage] = useState([]);
  const [input, setInput] = useState({
    title: '',
    description: '',
    bedrooms: '',
    guest: '',
    beds: '',
    bathrooms: '',
    room: '',
    size: '',
    unitOfMeasure: '',
    booking: '',
    name: '',
    price: '',
    additionalGuest: '',
    noOfGuest: '',
    CleaningFee: '',
    cityFee: '',
    securityDeposit: '',
    startDate: '',
    EndDate: '',
    nightly: '',
    additionalGuest2: '',
    weekEnds: '',
    image: [],
    address: '',
    aptSuite: '',
    city: '',
    state: '',
    zipCode: '',
    area: '',
    country: '',
    bedroomName: '',
    numberOfGuest: '',
    numberOfBed: '',
    bedType: '',
    minimumDayOfABooking: '',
    maximumDayOfABooking: '',
    additionalRulesInformation: '',
    calender: '',
  });
  const map = useRef();
  const pickImg = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: true,
    }).then(Img => {
      const myState = {...input};
      [...input?.image, (myState.image = Img)];
      setInput(myState);
      // setImage([...input?.image, ...Img]);
    });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header centerText={condition} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View>
          {condition == 'Information' ? (
            <View style={{padding: 20}}>
              <View>
                <Text
                  style={{color: 'black', fontWeight: '500', marginBottom: 20}}>
                  What kind of place do you want to list?
                </Text>
                <RadioBtn
                  containerStyle={{marginBottom: 10}}
                  label="Entire Place"
                />
                <RadioBtn
                  containerStyle={{marginBottom: 10}}
                  label="Private Room"
                />
                <RadioBtn
                  containerStyle={{marginBottom: 10}}
                  label="Shared Room"
                />
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Title*
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.title}
                    onChangeText={t => {
                      console.log('text', t);
                      const myState = {...input};
                      {
                        myState.title = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Title"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Description
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 200,
                  }}>
                  <TextField
                    value={input.description}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.description = t;
                      }
                      setInput(myState);
                    }}
                    multiline
                    placeholder="Description"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Type of listing
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    // paddingHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <SelectDropdown
                    data={countries}
                    renderCustomizedButtonChild={() => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 15,
                            width: '100%',
                          }}>
                          <View>
                            {/* <Text style={{fontSize: 10}}>Country/Region</Text> */}
                            <Text style={{color: 'black'}}>{selectCode}</Text>
                          </View>
                          <Feather name="chevron-down" size={20} />
                        </View>
                      );
                    }}
                    buttonStyle={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      //   marginTop: 10,
                    }}
                    dropdownStyle={{borderRadius: 10}}
                    buttonTextStyle={{color: 'lightgrey'}}
                    onSelect={(selectedItem, index) => {
                      setSelectCode(selectedItem);
                      console.log(selectedItem, 'selectedItem');
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Number of bedrooms
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.bedrooms = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.bedrooms}
                      placeholder="Enter Number of bedrooms"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Number of guest
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.guest = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.guest}
                      placeholder="Enter Number of guest"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Number of beds
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.beds = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.beds}
                      placeholder="Enter Number of beds"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Number of bathrooms
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.bathrooms = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.bathrooms}
                      placeholder="Enter Number of bathrooms"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Number of Room
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.room = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.room}
                      placeholder="Enter Number of Room"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Size
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.size = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.size}
                      placeholder="Enter the Size:Only number"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Unit of measure
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.unitOfMeasure = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.unitOfMeasure}
                      placeholder="Enter the Unit of measure, Ex:SqFt"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Affiliate Booking Link
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.booking = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.booking}
                      placeholder="Enter Affiliate Booking Link"
                    />
                  </View>
                </View>
              </View>
            </View>
          ) : condition == 'Pricing' ? (
            <View style={{padding: 20}}>
              <View>
                <Text
                  style={{color: 'black', fontWeight: '500', marginBottom: 20}}>
                  Instance booking
                </Text>
                <RadioBtn
                  containerStyle={{marginBottom: 10}}
                  label="Allow instant booking for this place."
                />
                {/* <Checkbox
                  label={'Allow instant booking for this place.'}
                  value={false}
                  color="lightgrey"
                  onValueChange={() => console.log('value changed')}
                /> */}
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Nightly*
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    placeholder="Enter price for 1 night"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  After Price Label
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    placeholder="Enter after price label Eg: Night/Hr"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Weekends
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    placeholder="Enter the unit price for a single day"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Select the days to apply weekend pricing
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    // paddingHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <SelectDropdown
                    data={weekend}
                    renderCustomizedButtonChild={() => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 15,
                            width: '100%',
                          }}>
                          <View>
                            {/* <Text style={{fontSize: 10}}>Country/Region</Text> */}
                            <Text style={{color: 'black'}}>
                              {selectWeekend}
                            </Text>
                          </View>
                          <Feather name="chevron-down" size={20} />
                        </View>
                      );
                    }}
                    buttonStyle={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      //   marginTop: 10,
                    }}
                    dropdownStyle={{borderRadius: 10}}
                    buttonTextStyle={{color: 'lightgrey'}}
                    onSelect={(selectedItem, index) => {
                      setSelectWeekend(selectedItem);
                      console.log(selectedItem, 'selectedItem');
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      fontSize: 20,
                      marginTop: 10,
                    }}>
                    Long-term pricing
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Weekly - 7+ nights
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      placeholder="Enter the unit price for a single day"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Monthly - 30+ nights
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      placeholder="Enter the unit price for a single day"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      fontSize: 20,
                      marginTop: 10,
                    }}>
                    Setup Extra Services Price
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Name
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.name = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.name}
                      placeholder="Enter service name"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Price
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.price = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.price}
                      placeholder="Enter price - only digits"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Type
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',

                      borderRadius: 10,
                    }}>
                    <SelectDropdown
                      data={guestType}
                      renderCustomizedButtonChild={() => {
                        return (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              paddingVertical: 15,
                              width: '100%',
                            }}>
                            <View>
                              {/* <Text style={{fontSize: 10}}>Country/Region</Text> */}
                              <Text style={{color: 'black'}}>
                                {selectGuestType}
                              </Text>
                            </View>
                            <Feather name="chevron-down" size={20} />
                          </View>
                        );
                      }}
                      buttonStyle={{
                        width: '100%',
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        //   marginTop: 10,
                      }}
                      dropdownStyle={{borderRadius: 10}}
                      buttonTextStyle={{color: 'lightgrey'}}
                      onSelect={(selectedItem, index) => {
                        setSelectGuestType(selectedItem);
                        console.log(selectedItem, 'selectedItem');
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      fontSize: 20,
                      marginTop: 10,
                    }}>
                    Additional costs
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Allow additional guests
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <RadioBtn
                      containerStyle={{marginBottom: 10, marginRight: 10}}
                      label="Yes"
                    />
                    <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
                    {/* <RadioButton
                      containerStyle={{marginBottom: 10, marginRight: 10}}
                      value={null}
                      color="lightgrey"
                      label={'Yes'}
                    />
                    <RadioButton
                      containerStyle={{marginBottom: 10}}
                      value={null}
                      color="lightgrey"
                      label={'No'}
                    /> */}
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Additional guests
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      value={input?.additionalGuest}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.additionalGuest = t;
                        }
                        setInput(myState);
                      }}
                      placeholder="Enter the price for 1 additional guest"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    No of Guests
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.noOfGuest = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.noOfGuest}
                      placeholder="Number of additional guests allowed"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Cleaning fee
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.CleaningFee = t;
                        }
                        setInput(myState);
                      }}
                      value={input?.CleaningFee}
                      placeholder="Enter the price for cleaning fee"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <RadioBtn
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    label="Daily"
                  />
                  <RadioBtn
                    containerStyle={{marginBottom: 10}}
                    label="Per stay"
                  />
                  {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'Daily'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'Per stay'}
                  /> */}
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    City fee
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      value={input?.cityFee}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.cityFee = t;
                        }
                        setInput(myState);
                      }}
                      placeholder="Enter the price for city fee"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <RadioBtn
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    label="Daily"
                  />
                  <RadioBtn
                    containerStyle={{marginBottom: 10}}
                    label="Per stay"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      marginTop: 10,
                    }}>
                    Security deposit
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      width: '100%',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 50,
                    }}>
                    <TextField
                      style={{height: 50}}
                      value={input?.securityDeposit}
                      onChangeText={t => {
                        const myState = {...input};
                        {
                          myState.securityDeposit = t;
                        }
                        setInput(myState);
                      }}
                      placeholder="Enter price for security deposit"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      marginBottom: 20,
                      fontSize: 20,
                      marginTop: 10,
                    }}>
                    Setup Custom Period Prices
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      //   backgroundColor: 'red',
                      width: '100%',
                    }}>
                    <View style={{width: '45%'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '500',
                          marginBottom: 20,
                          marginTop: 10,
                        }}>
                        Start Date
                      </Text>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: 'lightgrey',
                          width: '100%',
                          paddingHorizontal: 10,
                          paddingVertical: 13,
                          borderRadius: 10,
                        }}>
                        <Text>Enter Start Date</Text>
                      </View>
                    </View>
                    <View style={{width: '45%'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '500',
                          marginBottom: 20,
                          marginTop: 10,
                        }}>
                        End Date
                      </Text>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: 'lightgrey',
                          width: '100%',
                          paddingHorizontal: 10,
                          paddingVertical: 13,
                          borderRadius: 10,
                        }}>
                        <Text>Enter End Date</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '500',
                        marginBottom: 20,
                        marginTop: 10,
                      }}>
                      Nightly
                    </Text>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        width: '100%',
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        height: 50,
                      }}>
                      <TextField
                        style={{height: 50}}
                        value={input?.nightly}
                        onChangeText={t => {
                          const myState = {...input};
                          {
                            myState.nightly = t;
                          }
                          setInput(myState);
                        }}
                        placeholder="Enter price for 1 night"
                      />
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '500',
                        marginBottom: 20,
                        marginTop: 10,
                      }}>
                      Additional guests
                    </Text>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        width: '100%',
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        height: 50,
                      }}>
                      <TextField
                        style={{height: 50}}
                        value={input?.additionalGuest2}
                        onChangeText={t => {
                          const myState = {...input};
                          {
                            myState.additionalGuest2 = t;
                          }
                          setInput(myState);
                        }}
                        placeholder="Enter the price for 1 additional guest"
                      />
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '500',
                        marginBottom: 20,
                        marginTop: 10,
                      }}>
                      Weekends
                    </Text>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        width: '100%',
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        height: 50,
                      }}>
                      <TextField
                        style={{height: 50}}
                        value={input?.weekEnds}
                        onChangeText={t => {
                          const myState = {...input};
                          {
                            myState.weekEnds = t;
                          }
                          setInput(myState);
                        }}
                        placeholder="Enter the unit price for a single day"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : condition == 'Media' ? (
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
                  Drag and drop the images to customize the gallery order. Click
                  on the star icon to set the featured image
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
                          const img = input.image.filter(function (item, i) {
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
          ) : condition == 'Features' ? (
            <View style={{padding: 20}}>
              <View>
                <Text
                  style={{color: 'black', fontWeight: '500', marginBottom: 20}}>
                  Amenities
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    marginBottom: 10,
                  }}>
                  <CheckBoxBtn label="Air Conditioning" />
                  <CheckBoxBtn label="Barbecue Area" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  <CheckBoxBtn label="Dishwasher" />
                  <CheckBoxBtn label="Gym" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  <CheckBoxBtn label="Laundry" />
                  <CheckBoxBtn label="Microwave" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  <CheckBoxBtn label="Sauna" />
                  <CheckBoxBtn label="Swimming Pool" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    marginTop: 10,
                  }}>
                  <CheckBoxBtn label="TV Cable" />
                  <CheckBoxBtn label="Wi-Fi" />
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{color: 'black', fontWeight: '500', marginBottom: 20}}>
                  Facilities
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    marginBottom: 10,
                  }}>
                  <CheckBoxBtn label="Beachside" />
                  <CheckBoxBtn label="Farmacy" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  <CheckBoxBtn label="Free Parking" />
                  <CheckBoxBtn label="Markets" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  <CheckBoxBtn label="Playground" />
                  <CheckBoxBtn label="Reception" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    //   alignItems: 'center',
                    //   justifyContent: 'flex-start',
                    paddingHorizontal: 5,
                    marginTop: 10,
                  }}>
                  <CheckBoxBtn label="Security" />
                </View>
              </View>
            </View>
          ) : condition == 'Location' ? (
            <View style={{padding: 20}}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Address*
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.address}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.address = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the listing address"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Apt, Suite (Optional)
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.aptSuite}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.aptSuite = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Ex. #123"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  City
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.city}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.city = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the City"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  State
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.state}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.state = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the State"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Zip Code
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.zipCode}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.zipCode = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter your Zip Code"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Area
                </Text>
                <View
                  style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.area}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.area = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the Area"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Country
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.country}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.country = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the Country"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Drag and drop the pin on map to find exact Location
                </Text>
                <MapView
                  ref={map}
                  style={{width: '100%', height: 300}}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                  }}>
                  {/* {posts.map(place => (
            <CustomMarker
              coordinate={{
                latitude: place.coordinate.latitude,
                longitude: place.coordinate.longitude,
              }}
              key={place.id}
              price={place.newPrice}
              isSelected={place.id === selectedPlaceId}
              onPress={() => setSelectedPlaceId(place.id)}
            />
          ))} */}
                </MapView>
                {/* <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <TextField placeholder="Enter the Country" />
                </View> */}
              </View>
            </View>
          ) : condition == 'Bedroom' ? (
            <View style={{padding: 20}}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Bedroom name
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.bedroomName}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.bedroomName = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Ex. Master Room or Room 1"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Number of guests
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.numberOfGuest}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.numberOfGuest = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the number of guests for this room"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Number of beds
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.numberOfBed}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.numberOfBed = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the number of beds"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Bed type
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.bedType}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.bedType = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the bed type"
                  />
                </View>
              </View>
            </View>
          ) : condition === 'Terms&rules' ? (
            <View style={{padding: 20}}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Cancellation Policy
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    // paddingHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <SelectDropdown
                    data={policy}
                    renderCustomizedButtonChild={() => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 15,
                            width: '100%',
                          }}>
                          <View>
                            {/* <Text style={{fontSize: 10}}>Country/Region</Text> */}
                            <Text style={{color: 'black'}}>{selectPolicy}</Text>
                          </View>
                          <Feather name="chevron-down" size={20} />
                        </View>
                      );
                    }}
                    buttonStyle={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      //   marginTop: 10,
                    }}
                    dropdownStyle={{borderRadius: 10}}
                    buttonTextStyle={{color: 'lightgrey'}}
                    onSelect={(selectedItem, index) => {
                      setSelectPolicy(selectedItem);
                      console.log(selectedItem, 'selectedItem');
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Minimum days of a booking
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.minimumDayOfABooking}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.minimumDayOfABooking = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the minimum days of a booking (Only number)"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Maximum days of a booking
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 50,
                  }}>
                  <TextField
                    style={{height: 50}}
                    value={input?.maximumDayOfABooking}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.maximumDayOfABooking = t;
                      }
                      setInput(myState);
                    }}
                    placeholder="Enter the maximum days of booking (Only number)"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Smoking allowed?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioBtn
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    label="Yes"
                  />
                  <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
                  {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'Yes'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  /> */}
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Pets allowed?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioBtn
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    label="Yes"
                  />
                  <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
                  {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  /> */}
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Party allowed?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioBtn
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    label="Yes"
                  />
                  <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
                  {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'Yes'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  /> */}
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Children allowed?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioBtn
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    label="Yes"
                  />
                  <RadioBtn containerStyle={{marginBottom: 10}} label="No" />
                  {/* <RadioButton
                    containerStyle={{marginBottom: 10, marginRight: 10}}
                    value={null}
                    color="lightgrey"
                    label={'Yes'}
                  />
                  <RadioButton
                    containerStyle={{marginBottom: 10}}
                    value={null}
                    color="lightgrey"
                    label={'No'}
                  /> */}
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  Additional rules information (Optional)
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    width: '100%',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    height: 200,
                  }}>
                  <TextField
                    value={input?.additionalRulesInformation}
                    onChangeText={t => {
                      const myState = {...input};
                      {
                        myState.additionalRulesInformation = t;
                      }
                      setInput(myState);
                    }}
                    multiline
                    placeholder="Additional rules information (Optional)"
                  />
                </View>
              </View>
            </View>
          ) : condition === 'Calender' ? (
            <View style={{padding: 20}}>
              <Calendar
                onDayPress={day => {
                  console.log(
                    '====================================',
                    day.dateString,
                  );
                  setSelected(day.dateString);
                  const myState = {...input};
                  {
                    myState.calender = day.dateString;
                  }
                  setInput(myState);
                }}
                showWeekNumbers
                markedDates={{
                  [input?.calender]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: 'orange',
                  },
                }}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
      <View>
        <ProgressBar
          style={{borderRadius: 0, height: 2}}
          progress={progress}
          progressColor={'black'}
        />
        <View
          style={{
            padding: 10,
          }}>
          <Button
            onPress={() => {
              if (condition === 'Information') {
                setProgress(5);
                setCondition('Pricing');
              } else if (condition === 'Pricing') {
                setProgress(10);
                setCondition('Media');
              } else if (condition === 'Media') {
                setProgress(20);
                setCondition('Features');
              } else if (condition === 'Features') {
                setProgress(40);
                setCondition('Location');
              } else if (condition === 'Location') {
                setProgress(80);
                setCondition('Bedroom');
              } else if (condition === 'Bedroom') {
                setProgress(90);
                setCondition('Terms&rules');
              } else if (condition === 'Terms&rules') {
                setProgress(100);
                setCondition('Calender');
              } else {
                // console.log(input);
                navigation.goBack();
              }
            }}
            title={'Continue'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AddListing;
