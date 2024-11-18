import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, FlatList, RefreshControl } from 'react-native'
import { Icon } from '../../theme/icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../navigation'
import { RefTextStyle } from '../../theme/fonts'
import { Color } from '../../theme/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ServiceRunners } from '../../service/ServiceRunners'
import { Card } from '../../components/card'
import { formatDate } from '../../helpers/formats.date'

type HistoryPropsNavigationProp = NativeStackNavigationProp<RootStackParamsList, 'History'>

interface HistoryProps {
    navigation: HistoryPropsNavigationProp
}

const ListRunnersRender = () => {
    
    const { data, status, isLoading, refetch } = ServiceRunners.getRunners()

    console.log(data)

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
                return (
                    <View style={[styles.headerContainer, styles.header]}>
                        <Text style={styles.title} >História da F1</Text>
                        <Text style={styles.description} lineBreakMode='clip' lineBreakStrategyIOS='standard' >Conheça os nomes que fizeram história, desde os pioneiros até os campeões inesquecíveis.</Text>
                        <Text style={styles.infoList} >Pilotos</Text>
                    </View>
                )
            }}
            data={data}
            refreshing={status == "pending"}
            refreshControl={
                    <RefreshControl refreshing={status == 'pending' || isLoading} onRefresh={() => { refetch() }} />
             }
            keyExtractor={(item,index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 150 }}

            ItemSeparatorComponent={() => <View style={styleList.separator} ></View>}
            renderItem={({ item, index }) => {
                return (
                    <Card type={"runner"} flagUrl={item.nationality} name={item.givenName} birthDate={formatDate(item.dateOfBirth)}  />
                )
            }}
        />
    )
}

const styleList = StyleSheet.create({
    separator: {
        height: 10
    }
})

class History extends React.Component<HistoryProps> {

    render() {
        return (
            <SafeAreaView edges={['left', 'right']} >
                <View style={styles.container} >
                    <View style={styles.bodyContainer} >
                        <ListRunnersRender/>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default History

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: "column"
    },
    buttonBack: {

    },
    headerContainer: {
        paddingTop: 20
    },
    header: {

    },
    title: {
        ...RefTextStyle.Inter_bold_700,
        color: Color("NEUTRO_950"),
        fontSize: 20,
        marginBottom: 8
    },
    description: {
        ...RefTextStyle.Inter_Semibold_600,
        color: Color("NEUTRO_500"),
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 52
    },
    infoList: {
        ...RefTextStyle.Inter_Medium_600,
        fontSize: 12,
        color: Color("PRIMARY_G1"),
        opacity: 0.5,
        marginBottom: 10
    },
    bodyContainer: {

    }
})