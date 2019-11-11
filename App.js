/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


// import Flatist from './component/Flatlist';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { AppStackNavigator } from './navigators/appNavigator';
import { createAppContainer } from 'react-navigation'

// 将导航器转化成页面元素，可以像组件一样使用导航器
export default createAppContainer(AppStackNavigator);
