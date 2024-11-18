import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, StyleProp } from 'react-native'
import { Color } from '../../theme/colors'

import Logo from '../../assets/svg/Logo-icon.svg'
import { RefTextStyle } from '../../theme/fonts'
import { Badge } from '../../components/badge'

import RaceTrack from '../../assets/svg/Race-track.svg'
import { images } from '../../theme/images'
import { Card } from '../../components/card'
import { ButtonPrimary } from '../../components/button'

import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../navigation'

type HomeScreenPropsNavigationProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>

interface HomeProps {
    navigation: HomeScreenPropsNavigationProp
}

class Home extends React.Component<HomeProps> {


    onNavigationHistory = () => {
        this.props.navigation.navigate('History')
    }

    render() {
        return (
            <SafeAreaView style={safeArea.container} edges={['top', 'left', 'right']} >
                <ScrollView style={styles.container}>
                    <View style={[styles.headerContainer, styles.header, safeArea.horizontal]} >
                        <View>
                            <Logo fill={Color("PRIMARY_200")} />
                            <Text style={styles.headerTitle} >Olá, Ana Paula</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <View style={styles.infoContent} >
                                <View style={styles.infoText}>
                                    <Text style={styles.infoTitle} >Próxima corrido</Text>
                                    <Text style={styles.infoRace} >GP do Bahrein</Text>
                                    <Text style={styles.infoDate} >Data Sáb., 2 de Mar., 12:00</Text>
                                </View>
                                <RaceTrack style={styles.infoRaceImage} />
                            </View>
                            <View style={{ flexDirection: "row" }} >
                                <Badge style={{ paddingRight: 10 }} backgroundColor={"PRIMARY_200"} name={"lead"} text={"Circuito Internacional do Bahrein"} />
                            </View>

                        </View>

                        <View style={styles.contentInfo} >
                            <Badge backgroundColor={"NEUTRO_950"} name={"calendar"} text={"Próximas dias"} textColor={"PRIMARY_G0"} />
                            <Badge borderColor={"PRIMARY_G0"} text={"Dia 9, 14:00"} textColor={"PRIMARY_G0"} />
                            <Badge borderColor={"PRIMARY_G0"} text={"Dia 24, 14:00"} textColor={"PRIMARY_G0"} />
                        </View>

                    </View>

                    <View style={[styles.bodyContainer, styles.body, safeArea.horizontal]} >
                        <Text style={styles.infoOther} >Última corrida</Text>
                        <View style={styles.infoOtherRace} >
                            <Text style={styles.infoOtherTitle} >GP de Abu Dhabi</Text>
                            <Image style={styles.infoOtherImage} source={images.png.car} />
                        </View>
                        <Text style={styles.infoOtherText} >Data Sáb., 2 de Jan., De 2023 12:00</Text>
                        <View style={{ flexDirection: "row" }} >
                            <Badge style={{ paddingRight: 10 }} backgroundColor={"PRIMARY_BG"} name={"lead"} text={"Circuito Yas Marina Circuit"} textColor={"PRIMARY_B1"} />
                        </View>


                        <View style={styles.infoListRank}>
                            <Card type="line" position={1} iconName={"trophyline"} iconColor={"WARN_500"} />
                            <Card type="line" position={2} iconName={"trophyline"} iconColor={"NEUTRO_400"} />
                            <Card type="line" position={3} iconName={"trophyline"} iconColor={"WARN_900"} />
                        </View>
                    </View>

                    <View style={[styles.footerContainer, styles.footer, safeArea.horizontal]}>
                        <Text style={styles.footerInfoTitle} >História</Text>
                        <Text style={styles.footerDescription} >Conheça os pilotos de formula 1 que fizeram história em 1960</Text>
                        <ButtonPrimary title={"Ver pilotos"} iconName={"arrowRightLine"} onPress={this.onNavigationHistory} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home

const safeArea = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color("PRIMARY_950")
    },
    horizontal: {
        paddingHorizontal: 20
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: Color("PRIMARY_950"),
        paddingTop: 30,
        paddingBottom: 35
    },
    headerTitle: {
        ...RefTextStyle.Inter_bold_700,
        color: Color("PRIMARY_50"),
        fontSize: 20,
        paddingVertical: 4
    },
    body: {
        backgroundColor: Color("PRIMARY_G0")
    },
    headerContainer: {
    },
    infoContainer: {
        marginTop: 20
    },
    infoContent: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    infoText: {
        flex: 1
    },
    infoTitle: {
        ...RefTextStyle.Inter_Semibold_600,
        color: Color("PRIMARY_G0"),
        opacity: 0.5
    },
    infoRace: {
        ...RefTextStyle.Inter_bold_700,
        color: Color("PRIMARY_G0"),
        fontSize: 18,
        marginTop: 12
    },
    infoDate: {
        ...RefTextStyle.Inter_bold_700,
        color: Color("PRIMARY_G0"),
        marginTop: 16,
        fontSize: 14,
        opacity: 0.8,
    },
    infoRaceImage: {

    },
    badgeInfo: {
        marginRight: 8
    },
    contentInfo: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 20
    },
    bodyContainer: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    infoOther: {
        ...RefTextStyle.Inter_Semibold_600,
        color: Color("PRIMARY_G1"),
        opacity: 0.5
    },
    infoOtherTitle: {
        ...RefTextStyle.Inter_bold_700,
        color: Color("PRIMARY_B0"),
        fontSize: 18,
        marginTop: 12
    },
    infoOtherImage: {
        flex: 1,
        maxHeight: 52
    },
    infoOtherRace: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    infoOtherText: {
        ...RefTextStyle.Inter_Semibold_600,
        color: Color("PRIMARY_G1"),
        marginTop: 6,
        marginBottom: 8,
        fontSize: 14,
        opacity: 0.6,
    },
    infoListRank: {
        flexDirection: "column",
        borderRadius: 12,
        gap: 8,
        padding: 12,
        borderColor: Color("NEUTRO_300"),
        borderWidth: 1,
        marginTop: 16,
        marginBottom: 28
    },
    footerContainer: {

    },
    footer: {
        backgroundColor: Color("PRIMARY_50"),
        paddingVertical: 20,
        paddingBottom: 48
    },
    footerInfoTitle: {
        ...RefTextStyle.Inter_Semibold_600,
        color: Color("PRIMARY_G1"),
        opacity: 0.5,
        marginBottom: 20
    },
    footerDescription: {
        ...RefTextStyle.Inter_bold_700,
        fontSize: 14,
        color: Color("PRIMARY_950"),
        marginBottom: 20
    }
})