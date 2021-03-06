import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Page2 extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex:1, backgroundColor: 'gray', paddingTop:30}}>
                <Text style={styles.text}>欢迎来到Page2</Text>
                <Button title={'Go Back'} onPress={() => {
                    navigation.goBack();
                }}/>
                <Button title={'Go Page2'} onPress={() => {
                    navigation.navigate('page2');
                }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize:20,
        color: 'white'
    }
})