export const Colors: Record<string, string> = {
    PRIMARY_B0: '#363636',
    PRIMARY_B1: '#676767',
    PRIMARY_BG: '#EDEDED',
    PRIMARY_G0: '#ffffff',
    PRIMARY_G1: '#000000',
   
    PRIMARY_50: '#F9FFE5',
    PRIMARY_100: '#EEFFC8',
    PRIMARY_200: '#D4FF79',
    PRIMARY_400: '#abf299',
    PRIMARY_950: '#1B3102',

    NEUTRO_200: '#E7E5E4',
    NEUTRO_400: '#A8A29E',
    NEUTRO_500: '#78716C',
    NEUTRO_300: '#D6D3D1',
    NEUTRO_900: '#1C1917',
    NEUTRO_950: '#0C0A09',

    WARN_500: '#EF9120',
    WARN_900: '#773C17'
}


export function Color(color: string){
    if(Object.hasOwn(Colors,color)){
        return Colors[color as keyof typeof Colors]
    }
    return ""
}