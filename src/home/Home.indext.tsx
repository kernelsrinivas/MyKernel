import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Home extends Component {
    constructor(props: {} | Readonly<{}>){
        super(props);
    }
    render(): React.ReactNode {
        return <View>
            <Text>Home</Text>
        </View>
    }
}