import React, {memo} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Home(props) {
  const { history } = props;
  
  const toPagePer = () => {
    history.push('/personal')
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={toPagePer}>
        <Text>toPer</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(Home);
