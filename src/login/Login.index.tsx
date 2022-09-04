import React, { Component } from "react";
import { Text, View } from "react-native";
import { timeoutCallback } from "../app/helpers/timeHelper";
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

    componentDidMount(): void {
        timeoutCallback(()=> {
            this.setState({currentScreen: SCREENS.SIGNUP});
        }, 3000);
    }

    renderScreens = (screen: string): JSX.Element | null => {
        const renderMap = {
            [SCREENS.SPLASH]: () => <SplashView/>,
            [SCREENS.SIGNUP]: () => <SignupWidget next={()=> this.setState({currentScreen: SCREENS.OTP})}/>,
            [SCREENS.OTP]: () => <OtpWidget next={()=> this.setState({currentScreen: SCREENS.OTP})}/>,
            [SCREENS.PIN]: () => <PinWidget next={()=> this.setState({currentScreen: SCREENS.OTP})}/>
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