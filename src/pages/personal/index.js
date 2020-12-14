import React, {memo} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

function Personal(props) {
  const { history } = props;

  const tohome = () => {
    history.push('/home')
    
  };
  return (
    <View>
      <Text>personal</Text>
      <TouchableOpacity onPress={tohome}>
        <Text>tohome</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(Personal);
