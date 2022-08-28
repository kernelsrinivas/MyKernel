import React, { Component } from "react";
import { Text, View } from "react-native";
import { OtpWidget } from "./components/OTPWidget";
import { PinWidget } from "./components/PinWidget";
import { SignupWidget } from "./components/SignupWidget";
import { SplashView } from "./components/SplashView";

const SCREENS = {
    SPLASH : "SPLASH",
    SIGNUP: "SIGNUP",
    OTP: "OTP",
    PIN: "PIN"
};

interface State {
    currentScreen: string;
}

interface Props { 

}

export default class Login extends Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            currentScreen: SCREENS.SPLASH
        }
    }

    renderScreens = (screen: string): JSX.Element | null => {
        const renderMap = {
            [SCREENS.SPLASH]: () => <SplashView/>,
            [SCREENS.SIGNUP]: () => <SignupWidget/>,
            [SCREENS.OTP]: () => <OtpWidget/>,
            [SCREENS.PIN]: () => <PinWidget/>
        }
        return renderMap[screen] ? renderMap[screen]() : null;
    }

    render(): React.ReactNode {
        const { currentScreen } = this.state;
        return <View style={{flex:1}}>
            {this.renderScreens(currentScreen)}
        </View>
    }
}