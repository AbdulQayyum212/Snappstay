import Bedroom from '@components/Bedroom';
import {Button, LeftIconBtn} from '@components/Button';
import CheckBoxBtn from '@components/CheckBoxBtn';
import BedTypes from '@components/BedTypes';
import {Header} from '@components/Header';
import Information from '@components/Information';
import Amenities from '@components/Amenities';
import PlaceType from '@components/PlaceType';
import Location from '@components/Location';
import RadioBtn from '@components/RadioBtn';
import TermsRules from '@components/TermsRules';
import {useNavigation} from '@react-navigation/native';
import Calender from '@components/Calender';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import SelectDropdown from 'react-native-select-dropdown';
import {ProgressBar, TextField} from 'react-native-ui-lib';
import AddPhotos from '@components/AddPhotos';
import YourHouseTitle from '@components/YourHouseTitle';
import DescribeYourHouse from '@components/DescribeYourHouse';
import YourHousedescription from '@components/YourHousedescription';
import FirstReservation from '@components/FirstReservation';
import FormData from 'form-data';
import CreatePrice from '@screens/CreatePrice';
import LastStep from '@screens/LastStep';
import Toast from 'react-native-toast-message';
import {ToastError, ToastSuccess} from '../../Config/Constants';
import {selectAddListingState, selectAuthState} from '@stores/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  Add_Listing,
  setId,
  setStep,
} from '@stores/HomeAction/AddListingActions';
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
  const {isAuthenticated, user, error, isLoggingIn} =
    useSelector(selectAuthState);
  const [selectGuestType, setSelectGuestType] = useState('Single Fee');
  const [selectWeekend, setSelectWeekend] = useState('Saturday and Sunday');
  const [selected, setSelected] = useState<string>('');
  const [progress, setProgress] = useState(0);
  //   const [condition, setCondition] = useState('');
  const [condition, setCondition] = useState('Information');
  const {id, step} = useSelector(selectAddListingState);
  const dispatch = useDispatch();
  // const [image, setImage] = useState([]);
  const [input, setInput] = useState<{
    title: string;
    description: string;
    unitOfMeasure: string;
    booking: string;
    name: string;
    price: number;
    image: ImageOrVideo[];
    address: string;
    city: string;
    state: string;
    zipCode: string;
    area: string;
    country: string;
    property_type: string;
    place_type: string;
    guests: string;
    Bedrooms: string;
    beds: string;
    bathrooms: string;
    pets: string;
    guest_type: string;
    security_camera: string;
    animals: string;
    weapon: string;
    lat: number;
    lng: number;
  }>({
    title: '',
    description: '',
    unitOfMeasure: '',
    booking: '',
    name: '',
    price: 0,
    image: [],
    address: '',
    city: '',
    state: '',
    zipCode: '',
    area: '',
    country: '',
    property_type: '',
    place_type: '',
    guests: '',
    Bedrooms: '',
    beds: '',
    bathrooms: '',
    guest_type: '',
    security_camera: '',
    weapon: '',
    animals: '',
    pets: 'No',
    lat: 0.12,
    lng: -0.12,
  });
  const [informationState, setInformationState] = useState({
    House: {
      image: require('@assets/home.png'),
      title: 'House',
      selected: false,
    },
    Apartment: {
      image: require('@assets/apartment.png'),
      title: 'Apartment',
      selected: false,
    },
    Barn: {image: require('@assets/barn.png'), title: 'Barn', selected: false},
    Boat: {
      image: require('@assets/houseboat.png'),
      title: 'Boat',
      selected: false,
    },
    Cabin: {
      image: require('@assets/cabin.png'),
      title: 'Cabin',
      selected: false,
    },
    'Camper/RV': {image: require('@assets/camper-van.png'), selected: false},
    Farm: {image: require('@assets/field.png'), selected: false},
    Resorts: {image: require('@assets/guesthouse.png'), selected: false},
    Cottages: {image: require('@assets/cottagess.png'), selected: false},
    Glamping: {image: require('@assets/glampingg.png'), selected: false},
    Service: {image: require('@assets/servicess.png'), selected: false},
    Villas: {image: require('@assets/housess.png'), selected: false},
    'Artistic Retreats': {image: require('@assets/artis.png'), selected: false},
    Design: {image: require('@assets/des.png'), selected: false},
    Dome: {image: require('@assets/dom.png'), selected: false},
    Golfing: {image: require('@assets/golf.png'), selected: false},
    Island: {image: require('@assets/isl.png'), selected: false},
    Mansions: {image: require('@assets/mans.png'), selected: false},
    'National Parks': {image: require('@assets/natio.png'), selected: false},
    New: {image: require('@assets/ne.png'), selected: false},
    'Private Rooms': {image: require('@assets/pri.png'), selected: false},
    'Top of the world': {image: require('@assets/top.png'), selected: false},
    Tower: {image: require('@assets/tow.png'), selected: false},
    Treehouses: {image: require('@assets/tree.png'), selected: false},
    Trending: {image: require('@assets/tren.png'), selected: false},
    Windmills: {image: require('@assets/wind.png'), selected: false},
  });
  const [describeYourHouse, setDescribeYourHouse] = useState({
    Peaceful: {
      image: require('@assets/desc-your-house-icon.png'),
      title: 'Peaceful',
      selected: false,
    },
    Unique: {
      image: require('@assets/desc-your-house-icon-02.png'),
      title: 'Unique',
      selected: false,
    },
    'Family-friendly': {
      image: require('@assets/desc-your-house-icon-03.png'),
      title: 'Family-friendly',
      selected: false,
    },
    Stylish: {
      image: require('@assets/desc-your-house-icon-04.png'),
      title: 'Stylish',
      selected: false,
    },
    Central: {
      image: require('@assets/desc-your-house-icon-05.png'),
      title: 'Central',
      selected: false,
    },
    Spacious: {
      image: require('@assets/desc-your-house-icon-06.png'),
      title: 'Spacious',
      selected: false,
    },
  });
  const [publishListing, setPublishListing] = useState({
    'Tell guests what your House has to offer': {
      WIFI: {
        title: 'You can add more amenities after you publish your listing',
        selected: false,
        key: 'wifi',
        image: require('../../assets/wifi.png'),
      },
      TV: {
        selected: false,
        key: 'tv',
        image: require('../../assets/tv.png'),
      },
      Kitchen: {
        selected: false,
        key: 'kitchen',
        image: require('../../assets/kitchen1.png'),
      },
      Washer: {
        selected: false,
        key: 'washer',
        image: require('../../assets/washer1.png'),
      },
      'Free parking': {
        selected: false,
        key: 'free parking',
        image: require('../../assets/parking.png'),
      },
      'Paid parking': {
        selected: false,
        key: 'paid parking',
        image: require('../../assets/paid-parking.png'),
      },
      'Air conditioning': {
        selected: false,
        key: 'air conditioning',
        image: require('../../assets/air-conditioning.png'),
      },
      'Dedicated workspace': {
        selected: false,
        key: 'dedicated workspace',
        image: require('../../assets/dedicated-workspace.png'),
      },
    },
    'Do you have any standout amenities?': {
      Pool: {
        title: 'You can add more amenities after you publish your listing',
        selected: false,
        key: 'pool',
        image: require('../../assets/pool.png'),
      },
      'Hot tub': {
        selected: false,
        key: 'hot tub',
        image: require('../../assets/hot-tub.png'),
      },
      Patio: {
        selected: false,
        key: 'patio',
        image: require('../../assets/patio.png'),
      },
      'BBQ grill': {
        selected: false,
        key: 'BBQ grill',
        image: require('../../assets/bbq-grill.png'),
      },
      'Outdoor dining area': {
        selected: false,
        key: 'Outdoor dining area',
        image: require('../../assets/outdoor-dining-area.png'),
      },
      'Fire pit': {
        selected: false,
        key: 'Fire pit',
        image: require('../../assets/fire-pit.png'),
      },
      'Pool table': {
        selected: false,
        key: 'Pool table',
        image: require('../../assets/pool-table.png'),
      },
      'Indoor fireplace': {
        selected: false,
        key: 'Indoor fireplace',
        image: require('../../assets/indoor-fireplace.png'),
      },
      Piano: {
        selected: false,
        key: 'Piano',
        image: require('../../assets/piano.png'),
      },
      'Exercise equipment': {
        selected: false,
        key: 'Exercise equipment',
        image: require('../../assets/exercise-equipment.png'),
      },
      'Lake access': {
        selected: false,
        key: 'Lake access',
        image: require('../../assets/lake-access.png'),
      },
      'Beach access': {
        selected: false,
        key: 'Beach access',
        image: require('../../assets/beach-access.png'),
      },
      'Ski-in/Ski-out': {
        selected: false,
        key: 'Ski-in/Ski-out',
        image: require('../../assets/ski-in-and-ski-out.png'),
      },
      'Outdoor shower': {
        selected: false,
        key: 'Outdoor shower',
        image: require('../../assets/outdoor-shower.png'),
      },
      'Indoor Cinema': {
        selected: false,
        key: 'Indoor Cinema',
        image: require('../../assets/indoor-cinema.png'),
      },
    },
    'Do you have any of these safety items?': {
      'Smoke alarm': {
        selected: false,
        key: 'Smoke alarm',
        image: require('../../assets/smoke-alarm.png'),
      },
      'First aid kit': {
        selected: false,
        key: 'First aid kit',
        image: require('../../assets/first-aid-kit.png'),
      },
      'Fire extinguisher': {
        selected: false,
        key: 'Fire extinguisher',
        image: require('../../assets/fire-extinguisher.png'),
      },
      'Carbon monoxide alarm': {
        selected: false,
        key: 'Carbon monoxide alarm',
        image: require('../../assets/carbon-monoxide-alarm.png'),
      },
    },
  });
  console.log('step ==><><', step);
  const map = useRef();
  const pickImg = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: true,
    }).then(Img => {
      setInput(prev => ({...prev, image: [...prev.image, ...Img]}));
    });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        centerText={condition}
        onPress={() => {
          dispatch(setId(null));
          dispatch(setStep(null));
          navigation.goBack();
        }}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <View>
          {step === '2' ? (
            <Information
              setInformationState={setInformationState}
              setInput={setInput}
              informationState={informationState}
              countries={countries}
              selectCode={selectCode}
            />
          ) : step === '3' ? (
            <Location setInput={setInput} input={input} />
          ) : step === '4' ? (
            <PlaceType pickImg={pickImg} setInput={setInput} input={input} />
          ) : step === '5' ? (
            <BedTypes input={input} setInput={setInput} />
          ) : step === '6' ? (
            <Amenities
              publishListing={publishListing}
              setPublishListing={setPublishListing}
            />
          ) : step === '8' ? (
            <AddPhotos input={input} pickImg={pickImg} setInput={setInput} />
          ) : step === '9' ? (
            <YourHouseTitle setInput={setInput} input={input} />
          ) : step === '10' ? (
            <DescribeYourHouse
              describeYourHouse={describeYourHouse}
              setDescribeYourHouse={setDescribeYourHouse}
            />
          ) : step === '11' ? (
            <YourHousedescription setInput={setInput} input={input} />
          ) : step === '12' ? (
            <FirstReservation setInput={setInput} input={input} />
          ) : step === '14' ? (
            <CreatePrice setInput={setInput} input={input} />
          ) : step === '15' ? (
            <LastStep setInput={setInput} />
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
              if (step === '2') {
                if (input.property_type === '')
                  return Toast.show(ToastError('Property Type is Required'));
                console.log('step', step);

                const formData = new FormData();
                formData.append('id', Number(id));
                formData.append('property_type', input?.property_type);
                dispatch(Add_Listing(formData));
                setProgress(0);
                setCondition('Pricing');
              } else if (step === '3') {
                if (input.country === '')
                  return Toast.show(ToastError('Address is Required'));
                const formData = new FormData();
                formData.append('id', id);
                formData.append('address', input?.address);
                formData.append('city', input.city);
                formData.append('state', input.state);
                formData.append('country', input.country);
                formData.append('zip', input.zipCode);
                formData.append('lat', input.lat);
                formData.append('long', input.lng);
                dispatch(Add_Listing(formData));
                console.log('input', input);
                setProgress(5);
                setCondition('Place Type');
              } else if (step === '4') {
                if (input.place_type === '')
                  return Toast.show(ToastError('Place Type is Required'));
                const formData = new FormData();
                formData.append('id', id);
                formData.append('place_type', input.place_type);
                dispatch(Add_Listing(formData));
                setProgress(7);
                setCondition('Features');
              } else if (step === '5') {
                if (input.guests === '')
                  return Toast.show(ToastError('guests is Required'));
                else if (input.Bedrooms === '')
                  return Toast.show(ToastError('Bedroom is Required'));
                else if (input?.beds === '')
                  return Toast.show(ToastError('Beds is Required'));
                else if (input?.bathrooms === '')
                  return Toast.show(ToastError('Bathrooms is Required'));
                const formData = new FormData();
                formData.append('id', id);
                formData.append('guests', input.guests);
                formData.append('bedrooms', input.Bedrooms);
                formData.append('beds', input.beds);
                formData.append('bathrooms', input.bathrooms);
                formData.append('pets', input.pets);
                dispatch(Add_Listing(formData));
                setProgress(10);
                setCondition('Location');
                console.log('input', input);
              } else if (step === '6') {
                // const formData = {
                //   id: id,

                // };
                const formData = new FormData();
                formData.append('id', id);
                formData.append(
                  'amenities',
                  Object.values(
                    publishListing['Tell guests what your House has to offer'],
                  )
                    .filter(x => x.selected)
                    .map(x => x.key),
                );
                formData.append(
                  'standout_amenities',
                  Object.values(
                    publishListing['Do you have any standout amenities?'],
                  )
                    .filter(x => x.selected)
                    .map(x => x.key),
                );
                formData.append(
                  'safety_items',
                  Object.values(
                    publishListing['Do you have any of these safety items?'],
                  )
                    .filter(x => x.selected)
                    .map(x => x.key),
                );
                dispatch(Add_Listing(formData));
                setProgress(15);
                setCondition('Add Photos');
              } else if (step === '8') {
                if (input.image.length === 0)
                  return Toast.show(ToastError('Image is Required'));
                const formData = new FormData();
                formData.append('id', id);
                // formData.append('photos', input.image);
                {
                  input.image.map((Img, i) => {
                    let spirit_uri = Img.path.split('/');
                    let name = spirit_uri[spirit_uri.length - 1];
                    let imageObj = {
                      name,
                      uri: Img.path,
                      type: Img.mime,
                      size: Img.size,
                    };
                    formData.append(`photos[${i}]`, imageObj, `${name}.jpg`);
                  });
                }
                dispatch(Add_Listing(formData));
                setProgress(20);

                setCondition('Add Title');
              } else if (step === '9') {
                if (input.title === '')
                  return Toast.show(ToastError('Title is Required'));
                const formData = new FormData();
                formData.append('id', id);
                formData.append('house_title', input.title);
                dispatch(Add_Listing(formData));
                setProgress(25);
                setCondition('Describe Your House');
              } else if (step === '10') {
                const formData = new FormData();
                formData.append('id', id);
                // barn[]
                formData.append(
                  'barn',
                  Object.values(describeYourHouse)
                    .filter(x => x.selected)
                    .map(x => x.title),
                );
                dispatch(Add_Listing(formData));
                setProgress(30);
                setCondition('Your House Description');
              } else if (step === '11') {
                if (input.description === '')
                  return Toast.show(ToastError('Description is Required'));
                const formData = new FormData();
                formData.append('id', id);
                formData.append('description', input.description);
                dispatch(Add_Listing(formData));
                setProgress(35);

                setCondition('First Reservationn');
                console.log('input', input);
              } else if (step === '12') {
                if (input.guest_type === '')
                  return Toast.show(ToastError('Guest Type is Required'));
                const formData = new FormData();
                formData.append('id', id);
                formData.append('guest_type', input.guest_type);
                dispatch(Add_Listing(formData));
                setProgress(80);
                setCondition('Your Price');
              } else if (step === '14') {
                if (input.price === 0)
                  return Toast.show(ToastError('Price is Required'));
                const formData = new FormData();
                formData.append('id', id);
                formData.append('price', input.price);
                dispatch(Add_Listing(formData));
                setProgress(100);
                setCondition('Last Step');
              } else {
                if (step === '18') {
                  Toast.show(ToastSuccess('Property Create Successfully'));
                  dispatch(setId(null));
                  dispatch(setStep(null));
                } else {
                  const formData = new FormData();
                  formData.append('id', id);
                  formData.append('publish', '');
                  formData.append('user_id', user?.id);
                  formData.append('security_camera', input.security_camera);
                  formData.append('weapon', input.weapon);
                  formData.append('animals', input.animals);
                  formData.append('step', 18);
                  dispatch(Add_Listing(formData));
                }
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
