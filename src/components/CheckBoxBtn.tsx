import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-ui-lib';

const CheckBoxBtn = ({label}: any) => {
  const [checkBox, setCheckBox] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setCheckBox(!checkBox)}
      style={{width: '40%', paddingVertical: 5}}>
      <Checkbox
        label={label}
        value={checkBox}
        color="black"
        onValueChange={() => console.log('value changed')}
      />
    </TouchableOpacity>
  );
};
export default CheckBoxBtn;
