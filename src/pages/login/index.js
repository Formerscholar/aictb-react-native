import React, {memo, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {GET_HOME_INFO} from '../../store/actionType';
import {gethome} from '../../services/home';
import Styles from './style';
import { InputItem, List  } from '@ant-design/react-native';

const tabsText = ['我是学生', '我是老师'];

function Login(props) {
  const {history, homeInfo, setData} = props;
  const [current, setCurrent] = useState(0);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    console.log(homeInfo);
    return () => {};
  }, []);

  const tabhandleClick = (idx) => {
    setCurrent(idx);
  };

  return (
    <View style={[Styles.root]}>
      <Image
        style={[Styles.bgimg]}
        source={{
          uri: 'https://aictb.oss-cn-shanghai.aliyuncs.com/App/login_bg.png',
        }}></Image>
      <View style={[Styles.tabs]}>
        {tabsText.map((item, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => tabhandleClick(idx)}
              activeOpacity={0.618}
              style={[
                Styles.tabItems,
                {borderBottomColor: idx === current ? '#E50304' : '#fff'},
              ]}>
              <Text style={Styles.tabItemsText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <List>
        <InputItem
          clear
          type="phone"
          value={phone}
          placeholder="请输入手机号"
        >
        </InputItem>
      </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Login));
