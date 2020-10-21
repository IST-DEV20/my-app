import React, { Component } from 'react'
import { View, Text } from 'react-native'
import NavigationBar from 'react-native-navbar-color'

export default class App extends Component {
    componentDidMount() {
        NavigationBar.setColor('#ffab8e')
    }

    render() {
        return (
            <View>
                <Text>
                    This is how we can set the navigation bar color!
                </Text>
            </View>
        )
    }
}