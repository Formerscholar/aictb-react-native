import { Dimensions } from 'react-native'

// 设计稿宽度 / 设计稿元素宽度 = 手机屏幕宽度 / 手机中元素宽度
// 手机中元素宽度 = 手机屏幕宽度 * 设计稿元素宽度 /  设计稿宽度

/**
 * 屏幕宽度
 */
export const screenWidth = Dimensions.get('window').width
/**
 * 屏幕高度
 */
export const screenHeight = Dimensions.get('window').height
/**
 * px转dp
 * @param {Number} elePx 设计稿元素宽度
 */
export const pxToDp = (elePx) => screenWidth * elePx / 750


