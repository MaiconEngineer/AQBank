import { StyleProp, TextStyle } from "react-native";
import { isIOS } from "../config/constants";

export const Fonts = {
    Inter : {
        Inter_normal: isIOS() ? 'Inter_24pt-Regular.ttf' : 'Inter_24pt-Regular.ttf',
        Inter_medium: isIOS() ? 'Inter_24pt-Medium.ttf' : 'Inter_18pt-Medium.ttf',
        Inter_bold: isIOS() ? 'Inter_18pt-Bold.ttf' : 'Inter_28pt-Bold.ttf'
    },
    SfProDisplay: {
        SfPro_normal: ''
    }
}

function Font(name: string,weight: string){
    if(Object.hasOwn(Fonts,'Inter')){
        return ''
    }
    return ''
}


export const RefTextStyle = {
    Inter_Medium_500: {
        fontFamily: Fonts.Inter.Inter_medium,
        fontWeight: "500",
        lineHeight: 0
    } as  TextStyle,
    Inter_Medium_600: {
        fontFamily: Fonts.Inter.Inter_medium,
        fontWeight: "600",
        lineHeight: 0
    } as TextStyle,
    Inter_Semibold_600: {
        fontFamily: Fonts.Inter.Inter_medium,
        fontWeight: '600'
    } as TextStyle,
    Inter_bold_700 : {
        fontFamily: Fonts.Inter.Inter_bold,
        fontWeight: '700'
    } as TextStyle
}