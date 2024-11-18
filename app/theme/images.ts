
export type Images = {
    png: {
        car: any,
        german: any,
        american: any,
        british: any,
        french: any,
        spanish: any,
        swedish: any,
        italian: any,
        thai: any,
        dutch: any
    }
}

export const images: Images = {
    png: {
        car: require('../assets/png/car.png'),
        german: require('../assets/png/germany.png'),
        british: require('../assets/png/united_kingdom.png'),
        american: require('../assets/png/united_states.png'),
        french: require('../assets/png/france.png'),
        spanish: require('../assets/png/spain.png'),
        swedish: require('../assets/png/sweden.png'),
        italian: require('../assets/png/italy.png'),
        thai: require('../assets/png/thailand.png'),
        dutch: require('../assets/png/belgium.png')
    }
}