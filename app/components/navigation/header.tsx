import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "../../theme/icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Color } from "../../theme/colors"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { RefTextStyle } from "../../theme/fonts"

type Props = {
    navigation: NativeStackHeaderProps
}

export const HeaderNavigation = ({ navigation }: Props) => {

    const { top } = useSafeAreaInsets()
    const IconLeft = Icon("arrowLeftLine")

    return (
        <View style={[styles.container,{ paddingTop: top + 15 }]} >
            <TouchableOpacity style={styles.buttonBack} onPress={() => { navigation.navigation.goBack() }} >
                <IconLeft width={25} height={25} fill={Color("NEUTRO_950")} />
            </TouchableOpacity>
            <Text style={styles.title} >{navigation.route.name}</Text>
            <View style={styles.buttonNext} ></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    buttonBack: {
        width: 40,
        height: 40,
        backgroundColor: Color("PRIMARY_100"),
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        ...RefTextStyle.Inter_Medium_600,
        marginHorizontal: 'auto',
        fontSize: 14,
        color: Color("NEUTRO_900")
    },
    buttonNext: {
        width: 40,
        height: 40
    }
})