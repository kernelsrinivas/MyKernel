import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Login extends Component {
    constructor(props: {} | Readonly<{}>){
        super(props);
    }
    render(): React.ReactNode {
        return <View>
            <Text>Login</Text>
        </View>
    }
}