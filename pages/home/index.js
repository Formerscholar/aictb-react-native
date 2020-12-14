import React, {memo, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {GET_HOME_INFO} from '../../store/actionType';
import {gethome} from '../../services/home';

function Home(props) {
  const {history, homeInfo, setData} = props;
  const [indexData, setIndexData] = useState({});

  useEffect(() => {
    gethomeData();
    return () => {};
  }, []);

  const gethomeData = async () => {
    const {code, data} = await gethome();
    alert(code);
    if (code == 200) {
      console.log(data);
      setIndexData(data);
      setData(data);
    }
  };

  const toPagePer = () => {
    history.push('/personal');
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={toPagePer}>
        <Text>toPer</Text>
      </TouchableOpacity>
      <Text>{homeInfo?.test}</Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    homeInfo: state.homeInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData(value) {
      let action = {
        type: GET_HOME_INFO,
        value: value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
