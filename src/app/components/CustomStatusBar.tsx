import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { COLORS } from "../../theme/colorCode.constants";

const statusbarHeight = Platform.select({ios: 47, android: StatusBar.currentHeight});

export const YellowStatusBar = () => (
    <View style={{height: statusbarHeight, backgroundColor: COLORS.YELLOW_COLOR}}>
        <StatusBar barStyle={'dark-content'}/>
    </View>
);