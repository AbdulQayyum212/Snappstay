import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-ui-lib';

const RadioBtn = ({label, containerStyle}: any) => {
  const [CheckBox, setCheckBox] = useState(false);
  return (
    <TouchableOpacity onPress={() => setCheckBox(!CheckBox)}>
      <RadioButton
        containerStyle={containerStyle}
        selected={CheckBox}
        color="black"
        label={label}
      />
    </TouchableOpacity>
  );
};
export default RadioBtn;
