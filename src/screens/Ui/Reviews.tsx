import {Button} from '@components/Button';
import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import {Chip, ProgressBar, TextField} from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather';
const Reviews = () => {
  const navigation = useNavigation();
  const [condition, setCondition] = useState('start');
  const [rating, setRating] = useState(0);
  const [progress, setProgress] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPress={() => navigation.goBack()} />
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
            // borderWidth: 1,
            // width: 30,
            // height: 30,
            // alignItems: 'center',
            // justifyContent: 'center',
            // borderRadius: 50,
            // borderColor: 'lightgrey',
          }}>
          <EvilIcons name={'chevron-left'} size={25} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <View>
          {/* <Text
            style={{
              textDecorationLine: 'underline',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Save & exit
          </Text> 
        </View>
      </View> */}
      <ScrollView>
        {condition == 'start' ? (
          <View style={{padding: 20}}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginRight: 10,
              }}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
                source={require('@assets/Maskgroup.png')}
              />
            </View>
            <Text
              style={{
                color: 'black',
                marginTop: 20,
                fontWeight: '600',
                fontSize: 25,
              }}>
              Write a review for Stay & Fun
            </Text>
            <Text style={{fontSize: 18, textAlign: 'justify', marginTop: 10}}>
              Tell us how things went at Stay & Fun's place. your feedback
              cencourages host to do their best and help fufure know whats to
              expect
            </Text>
          </View>
        ) : condition == 'star' ? (
          <View style={{padding: 20}}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginRight: 10,
              }}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                }}
                source={require('@assets/Maskgroup.png')}
              />
            </View>
            <Text
              style={{
                color: 'black',
                marginTop: 20,
                fontWeight: '600',
                fontSize: 25,
              }}>
              How was your start?
            </Text>
            <Text style={{fontSize: 18, textAlign: 'justify', marginTop: 10}}>
              Let us know how your overall experience was with Stay & Fun and
              their place
            </Text>
            <View style={{marginTop: 20}}>
              <StarRating
                enableHalfStar={false}
                color="black"
                rating={rating}
                onChange={setRating}
                starSize={50}
              />
            </View>
            <Text style={{marginTop: 10, color: 'black'}}>Select a rating</Text>
          </View>
        ) : condition == 'place' ? (
          <View style={{padding: 20}}>
            <View
              style={{
                // borderRadius: 50,
                marginRight: 10,
              }}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  tintColor: 'black',
                  //   borderRadius: 100,
                }}
                source={require('@assets/Vectors.png')}
              />
            </View>
            <Text
              style={{
                color: 'black',
                marginTop: 20,
                fontWeight: '600',
                fontSize: 25,
              }}>
              How was Check-in at Stay & Fun's place?
            </Text>
            <Text style={{fontSize: 18, textAlign: 'justify', marginTop: 10}}>
              How easy was finding the place and getting inside?
            </Text>
            <View style={{marginTop: 20}}>
              <StarRating
                enableHalfStar={false}
                color="black"
                rating={rating}
                onChange={setRating}
                starSize={50}
              />
            </View>
            <Text style={{marginTop: 10, color: 'black'}}>Extremely easy</Text>
            <View
              style={{
                marginTop: 40,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
              }}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  //   justifyContent: 'space-evenly',
                  marginTop: 20,
                  marginBottom: 5,
                }}>
                <Chip
                  size={{width: 20, height: 30}}
                  label={'Responsive hots'}
                  onPress={() => console.log('pressed')}
                  containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                />
                <Chip
                  size={{width: 20, height: 30}}
                  label={'Clear instruction'}
                  onPress={() => console.log('pressed')}
                  containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  //   justifyContent: 'space-evenly',
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                <Chip
                  size={{width: 20, height: 30}}
                  label={'Easy to find '}
                  onPress={() => console.log('pressed')}
                  containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                />
                <Chip
                  size={{width: 20, height: 30}}
                  label={'Easy to get inside  '}
                  onPress={() => console.log('pressed')}
                  containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  //   justifyContent: 'space-evenly',
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                <Chip
                  size={{width: 20, height: 30}}
                  label={'Felt right at home '}
                  onPress={() => console.log('pressed')}
                  containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                />
                <Chip
                  size={{width: 20, height: 30}}
                  label={'fixable check-in'}
                  onPress={() => console.log('pressed')}
                  containerStyle={{marginRight: 20, borderColor: 'lightgrey'}}
                />
              </View>
            </View>
          </View>
        ) : condition == 'review' ? (
          <View style={{padding: 20}}>
            <View
              style={{
                // borderRadius: 50,
                marginRight: 10,
              }}>
              <Feather size={50} color="black" name="edit-2" />
            </View>
            <Text
              style={{
                color: 'black',
                marginTop: 20,
                fontWeight: '600',
                fontSize: 25,
              }}>
              Write a public review
            </Text>
            <Text style={{fontSize: 18, textAlign: 'justify', marginTop: 10}}>
              This feedback's just for stay & fun-share what they can improve
              about their place or how thay host.
            </Text>
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: 'lightgrey',
                borderRadius: 10,
                marginTop: 20,
                height: 300,
                paddingHorizontal: 10,
              }}>
              <TextField placeholder="Write a public review" />
            </View>
          </View>
        ) : (
          <View style={{padding: 20}}>
            <View
              style={{
                // borderRadius: 50,
                marginRight: 10,
              }}>
              <Feather size={50} color="black" name="message-square" />
            </View>
            <Text
              style={{
                color: 'black',
                marginTop: 20,
                fontWeight: '600',
                fontSize: 25,
              }}>
              Write a private note
            </Text>
            <Text style={{fontSize: 18, textAlign: 'justify', marginTop: 10}}>
              This feedback's just for stay & fun-share what they can improve
              about their place or how thay host.
            </Text>
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: 'lightgrey',
                borderRadius: 10,
                marginTop: 20,
                height: 300,
                paddingHorizontal: 10,
              }}>
              <TextField placeholder="Write a private note" />
            </View>
          </View>
        )}
      </ScrollView>
      <ProgressBar
        style={{borderRadius: 0, height: 2}}
        progress={progress}
        progressColor={'black'}
      />
      <View
        style={{
          //   borderTopColor: 'lightgrey',
          //   borderTopWidth: 1,
          paddingVertical: 15,
          paddingHorizontal: 20,
        }}>
        {condition == 'start' ? (
          <Button
            onPress={() => {
              setProgress(20);
              setCondition('star');
            }}
            style={{paddingVertical: 15}}
            title={'Get Started'}
          />
        ) : condition == '' ? (
          <View style={{alignItems: 'flex-end'}}>
            <Button
              onPress={() => navigation.navigate('Done')}
              //   onPress={() => {
              //     if (condition == 'star') {
              //       setProgress(40);
              //       setCondition('place');
              //     } else if (condition == 'place') {
              //       setProgress(80);
              //       setCondition('review');
              //     } else {
              //       setProgress(100);
              //       setCondition('');
              //     }
              //   }}
              disabled={rating != 0 ? false : true}
              // onPress={() => navigation.navigate('MyTabs')}
              style={{marginTop: 20, paddingVertical: 10, width: 100}}
              title={'Submit'}
            />
          </View>
        ) : (
          <View style={{alignItems: 'flex-end'}}>
            <Button
              onPress={() => {
                if (condition == 'star') {
                  setProgress(40);
                  setCondition('place');
                } else if (condition == 'place') {
                  setProgress(80);
                  setCondition('review');
                } else {
                  setProgress(100);
                  setCondition('');
                }
              }}
              disabled={rating != 0 ? false : true}
              // onPress={() => navigation.navigate('MyTabs')}
              style={{marginTop: 20, paddingVertical: 10, width: 100}}
              title={'Next'}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default Reviews;
