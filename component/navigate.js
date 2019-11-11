import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        </View>
      );
    }
}

class page1 extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Page1</Text>
        </View>
      );
    }
}

export default  AppStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    page1: {
        screen: page1
    },
    page2: {
      screen: page2
    },
    page3: {
      screen: page3
   }
}, {
  defaultNavigationOptions: { // 默认全剧导航属性

  }
})