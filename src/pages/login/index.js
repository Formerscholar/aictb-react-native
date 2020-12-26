import React, {memo, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {USER_INFO} from '../../store/actionType';
import {
  StudentLogin,
  teacherLogin,
  WxStudentLogin,
  WxTeacherLogin,
} from '../../services/login';
import Styles from './style';
import {InputItem, List, Toast} from '@ant-design/react-native';
import CoverStyle from '../../assets/style/coverAntdStyle';
import {pxToDp} from '../../utils/stylesKits';
import LinearGradient from 'react-native-linear-gradient';
import * as WeChat from 'react-native-wechat-lib';

const tabsText = ['我是学生', '我是老师'];

function Login(props) {
  const {history, userInfo, setUserInfo} = props;
  const [current, setCurrent] = useState(0);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(userInfo);
    return () => {};
  }, []);

  const loginClick = async () => {
    let req;
    if (!current) {
      req = await StudentLogin({
        mobile: phone.split(' ').join(''),
        password,
      });
    } else {
      req = await teacherLogin({
        mobile: phone.split(' ').join(''),
        password,
      });
    }
    const {code, data, msg} = req;
    if (code === 200) {
      setUserInfo(data);
      if (!current) {
        alert('跳转学生首页');
      } else {
        alert('跳转老师首页');
      }
    } else {
      Toast.fail(msg);
    }
  };

  const pageToRegiste = () => {
    alert('跳转注册页面' + current);
  };
  const changePassWorld = () => {
    alert('修改密码页面' + current);
  };

  const wechatLogin = async () => {
    const isWx = await WeChat.isWXAppInstalled();
    if (!isWx) {
      alert('未安装微信');
      return;
    }
    const result = await WeChat.sendAuthRequest(
      'snsapi_userinfo',
      'wechat_sdk',
    );
    if (!current) {
      const { code, data, msg } = await WxStudentLogin({
        code: result.code
      })
      if (code === 200) {
        setUserInfo(data);
        alert('跳转学生首页');
      } else {
        Toast.fail(msg);
      }
    } else {
      const { code, data, msg } = await WxTeacherLogin({
        code: result.code
      })
      if (code === 200) {
        setUserInfo(data);
        alert('跳转老师首页');
      } else {
        Toast.fail(msg);
      }
    }
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
              onPress={() => {
                setCurrent(idx);
              }}
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
      <List style={[Styles.listbox]} styles={CoverStyle.newListStyle}>
        <InputItem
          style={[Styles.inputStyle, {marginBottom: pxToDp(60)}]}
          styles={CoverStyle.newInputStyle}
          type="phone"
          value={phone}
          onChange={(value) => {
            setPhone(value);
          }}
          placeholder="请输入手机号"
        />
        <InputItem
          style={[Styles.inputStyle]}
          styles={CoverStyle.newInputStyle}
          type="password"
          value={password}
          onChange={(value) => {
            setPassword(value);
          }}
          placeholder="请输入密码"
        />
      </List>
      <TouchableOpacity
        style={[Styles.button]}
        activeOpacity={0.618}
        onPress={loginClick}>
        <LinearGradient
          colors={['#E50304', '#F74300']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={Styles.buttonbg}>
          <Text style={Styles.buttontext}>登录</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={Styles.operateBox}>
        <TouchableOpacity
          activeOpacity={0.618}
          style={Styles.textWarp}
          onPress={pageToRegiste}>
          <Text style={Styles.operText}>立即注册</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.618}
          style={Styles.textWarp}
          onPress={changePassWorld}>
          <Text style={Styles.operText}>忘记密码?</Text>
        </TouchableOpacity>
      </View>
      {/* 其他 */}
      <View style={Styles.rests}>
        <Image
          style={Styles.restsImg}
          source={{
            uri:
              'https://aictb.oss-cn-shanghai.aliyuncs.com/App/login_wx_icon.png',
          }}
        />
        <Text style={Styles.restsText}>其他登录方式</Text>
        <Image
          style={Styles.restsImg}
          source={{
            uri:
              'https://aictb.oss-cn-shanghai.aliyuncs.com/App/login_wx_icon.png',
          }}
        />
      </View>
      {/* 微信 */}
      <TouchableOpacity
        activeOpacity={0.618}
        style={Styles.WeChat}
        onPress={wechatLogin}>
        <Image
          style={Styles.wechatIcon}
          source={{
            uri:
              'https://aictb.oss-cn-shanghai.aliyuncs.com/App/wechat_icon.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  const {userInfo} = state;
  return {
    userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo(value) {
      let action = {
        type: USER_INFO,
        value: value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Login));
