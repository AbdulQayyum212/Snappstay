import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {ExpandableSection, ProgressBar} from 'react-native-ui-lib';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, LeftIconBtn} from '../../components/Button';
import {useState} from 'react';
const StartEarning = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [top, setTop] = useState(false);
  const Body = () => {
    return (
      <View>
        <Image
          resizeMode="contain"
          style={{width: '100%', height: 200}}
          source={require('../../assets/Capture.png')}
        />
        <View style={{padding: 20}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
            Still have question?
          </Text>
          <Text style={{color: 'grey', width: '90%'}}>
            Get answers from an experience superhost near you.
          </Text>
          <Button
            // onPress={() => navigation.navigate('MyTabs')}
            style={{marginTop: 20, paddingVertical: 10, width: 200}}
            title={'Match with a superhost'}
          />
        </View>
      </View>
    );
  };
  const Bodys = () => {
    return (
      <View>
        <Image
          resizeMode="contain"
          style={{width: '100%', height: 200}}
          source={require('../../assets/Capture.png')}
        />
        <View style={{padding: 20}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
            Still have question?
          </Text>
          <Text style={{color: 'grey', width: '90%'}}>
            Get answers from an experience superhost near you.
          </Text>
          <Button
            style={{marginTop: 20, paddingVertical: 10, width: 200}}
            title={'Match with a superhost'}
          />
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
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
          }}>
          <EvilIcons name={'chevron-left'} size={25} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <View style={{flex: 1}} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 25,
              marginTop: 20,
              fontWeight: 'bold',
            }}>
            SnappStay it.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            You could earn
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 35,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            $287
          </Text>
          <ProgressBar progress={40} progressColor={'black'} />
          <Text
            style={{
              textAlign: 'center',
              textDecorationLine: 'underline',
              color: 'grey',
              marginTop: 20,
            }}>
            Learn how we estiment your earning
          </Text>
          <Image
            style={{width: '100%', height: 500, marginTop: 20}}
            source={require('../../assets/staticmap.png')}
          />
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              width: '60%',
            }}>
            SnappStay it easily with SnappStay Setup
          </Text>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: 500, marginTop: 20}}
            source={require('../../assets/Capture2.png')}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 25, color: 'red', fontWeight: 'bold'}}>
                Snapp
              </Text>
              <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
                Stay
              </Text>
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
              }}>
              SnappStay it with top-to-bottom prodection
            </Text>
            <View
              style={{
                marginTop: 20,
                borderBlockColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '500',
                    width: '50%',
                  }}>
                  Guest identity verification
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                    width: '30%',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      tintColor: 'green',
                    }}
                    source={require('../../assets/check.png')}
                  />
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      tintColor: 'green',
                    }}
                    source={require('../../assets/check.png')}
                  />
                </View>
              </View>
              <Text>
                Our comprehensive verification system checks details such as
                name, address, government ID and more to confirm the identity of
                guest who book on SnappStay
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                borderBlockColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '500',
                    width: '50%',
                  }}>
                  Reservation Screening
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                    width: '30%',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      tintColor: 'green',
                    }}
                    source={require('../../assets/check.png')}
                  />
                  <Ionicons name="close" color="red" size={30} />
                </View>
              </View>
              <Text>
                Our proprietary technology analyzes hundred of foctor in each
                reservation and blocks certain booking that show a high resk for
                disruptive parties and property demage
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                borderBlockColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',

                    width: '50%',
                  }}>
                  Arts & valuable
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '30%',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      tintColor: 'green',
                    }}
                    source={require('../../assets/check.png')}
                  />
                  <Ionicons name="close" color="red" size={30} />
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                borderBlockColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    width: '50%',
                  }}>
                  Auto & boat
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '30%',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      tintColor: 'green',
                    }}
                    source={require('../../assets/check.png')}
                  />
                  <Ionicons name="close" color="red" size={30} />
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                borderBlockColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    width: '50%',
                  }}>
                  ped damage
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '30%',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      tintColor: 'green',
                    }}
                    source={require('../../assets/check.png')}
                  />
                  <Ionicons name="close" color="red" size={30} />
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                borderBlockColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    width: '50%',
                  }}>
                  income loss
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '30%',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      tintColor: 'green',
                    }}
                    source={require('../../assets/check.png')}
                  />
                  <Ionicons name="close" color="red" size={30} />
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                borderBlockColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    width: '50%',
                  }}>
                  deep cleaning
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '30%',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      tintColor: 'green',
                    }}
                    source={require('../../assets/check.png')}
                  />
                  <Ionicons name="close" color="red" size={30} />
                </View>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text>
                comperison is based on public information and free offering by
                to competitors of 10/22. Find details and exclusions
                <Text
                  style={{
                    color: 'black',
                    textDecorationLine: 'underline',
                    paddingLeft: 10,
                  }}>
                  here
                </Text>
              </Text>
              <Button
                style={{marginTop: 20, paddingVertical: 10, width: 120}}
                title={'Learn more'}
              />
            </View>
            <View style={{marginTop: 40}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '700',
                  width: '60%',
                }}>
                Your questions, answered
              </Text>
              <View style={{marginBottom: 20}}>
                <ExpandableSection
                  top={top}
                  expanded={expanded}
                  sectionHeader={
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: 'white',
                        shadowRadius: 3.84,
                        paddingVertical: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                        justifyContent: 'space-between',
                        borderBlockColor: 'lightgrey',
                        borderBottomWidth: 1,
                      }}>
                      <Text
                        style={{
                          color: 'black',
                        }}>
                        Is my place right for snappStay?
                      </Text>
                      <Ionicons
                        name="chevron-down-sharp"
                        size={20}
                        color="black"
                      />
                    </View>
                  }
                  onPress={() => {
                    if (expanded) {
                      setExpanded(false);
                    } else {
                      setExpanded(true);
                      setExpanded1(false);
                    }
                  }}>
                  {Body()}
                </ExpandableSection>
              </View>
              <View style={{marginBottom: 20}}>
                <ExpandableSection
                  top={top}
                  expanded={expanded1}
                  sectionHeader={
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: 'white',
                        shadowRadius: 3.84,
                        paddingVertical: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                        justifyContent: 'space-between',
                        borderBlockColor: 'lightgrey',
                        borderBottomWidth: 1,
                      }}>
                      <Text
                        style={{
                          color: 'black',
                        }}>
                        Do i have to host all the time?
                      </Text>
                      <Ionicons
                        name="chevron-down-sharp"
                        size={20}
                        color="black"
                      />
                    </View>
                  }
                  onPress={() => {
                    if (expanded1) {
                      setExpanded1(false);
                    } else {
                      setExpanded(false);
                      setExpanded1(true);
                    }
                  }}>
                  {Bodys()}
                </ExpandableSection>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{width: '100%', padding: 10}}>
        <LeftIconBtn
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
          }}
          Lefticon={
            <FontAwesome6
              name="house-medical"
              size={20}
              style={{marginRight: 10}}
              color="white"
            />
          }
          title={'SnappSaty Setup'}
        />
      </View>
    </SafeAreaView>
  );
};
export default StartEarning;
