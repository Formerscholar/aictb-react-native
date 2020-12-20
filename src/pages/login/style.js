import {StyleSheet} from 'react-native';
import {pxToDp} from '../../utils/stylesKits';

const Styles = StyleSheet.create({
  root: {},
  bgimg: {
    width: '100%',
    height: pxToDp(383),
  },
  tabs: {
    marginTop: pxToDp(68),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItems: {
    padding: pxToDp(20),
    paddingLeft: pxToDp(80),
    paddingRight: pxToDp(80),
    borderBottomWidth: pxToDp(4),
    borderBottomColor: '#fff',
  },
  tabItemsText: {
    fontSize: pxToDp(34),
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#333333',
  },
  listbox: {
    marginTop: pxToDp(62),
    marginHorizontal: pxToDp(80),
  },
  inputStyle: {
    width: '100%',
    height: pxToDp(80),
    backgroundColor: '#F4F4F4',
    borderRadius: pxToDp(38),
    paddingLeft: pxToDp(49),
  },
  button: {
    height: pxToDp(80),
    borderRadius: pxToDp(40),
    marginTop: pxToDp(60),
    backgroundColor: 'rgba(255,255,255,0)',
    marginHorizontal: pxToDp(80),
  },
  buttontext: {
    textAlign: 'center',
    fontSize: pxToDp(30),
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    color: '#FFFFFF',
  },
  buttonbg: {
    borderRadius: pxToDp(40),
    height: pxToDp(80),
    justifyContent: 'center',
    textAlign: 'center',
  },
  operateBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: pxToDp(80),
    marginTop: pxToDp(32),
  },
  textWarp: {
    paddingHorizontal: pxToDp(50),
  },
  operText: {
    fontSize: pxToDp(24),
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    color: '#E50304',
  },
  rests: {
    marginTop: pxToDp(60),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  restsImg: {
    width: pxToDp(54),
    height: pxToDp(2),
  },
  restsText: {
    fontSize: pxToDp(24),
    fontFamily: 'Source Han Sans CN',
    fontWeight: '400',
    color: '#999999',
    marginHorizontal: pxToDp(26),
  },
  WeChat: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pxToDp(40),
  },
  wechatIcon: {
    width: pxToDp(66),
    height: pxToDp(66),
  }
});

export default Styles;
