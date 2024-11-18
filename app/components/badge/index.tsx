import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import { Image } from "react-native-svg"
import { Icon } from "../../theme/icons"
import { Color } from "../../theme/colors"
import { RefTextStyle } from "../../theme/fonts"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
    style?: StyleProp<ViewStyle>,
    text?: string | null;
    backgroundColor?: string | null;
    borderColor?: string | null;
    textColor?: string | null;
    name?: string | null;
}>

export const Badge = ({ style, text = null, backgroundColor = null, borderColor = null, textColor = null, name = null }: Props) => {

    const color = backgroundColor ? Color(backgroundColor): ''
    const colorBorder = borderColor ? Color(borderColor): ''
    const colorText = textColor ? Color(textColor): ''
    const IconSvg = name ? Icon(name) : () => (<View></View>)
    
    return (
        <View style={[styles.container,{ backgroundColor: color, borderColor: colorBorder },borderColor ? styles.border : null,style]} >
            { name ? <IconSvg width={14} height={14} /> : null }
            { text ? <Text style={[styles.text,{ color: colorText }]} >{text}</Text> : null }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 28,
        borderRadius: 7,
        overflow: 'hidden',
        paddingHorizontal: 7,
        flexDirection: "row",
        alignItems: "center"
    },
    border: {
        borderWidth: 1
    },
    text: {
        ...RefTextStyle.Inter_Medium_500,
        fontSize: 12,
        marginLeft: 5,
    }
})