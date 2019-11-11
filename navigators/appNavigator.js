import React from  'react';
import {createStackNavigator} from 'react-navigation-stack'
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import HomePage from '../pages/homePage';

// 创建导航器

export const AppStackNavigator = createStackNavigator(
    {
        HomePage: {
                screen: HomePage
        },
        Page1: {
            screen: Page1
        },
        Page2: {
            screen: Page2
        },
    },
    {
        defaultNavigationOptions: {
            // 全局默认属性，对当前导航器所有页面有效
        }
    }
);