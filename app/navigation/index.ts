import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screen";
import HistoryScreen from "../screen/History";

export type RootStackParamsList = {
    Home: undefined,
    History: undefined
}

export const RootStack = createNativeStackNavigator()