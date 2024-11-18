import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RefTextStyle } from '../../theme/fonts';
import { Color } from '../../theme/colors';
import { Images, images } from '../../theme/images';

interface CardLineProps {
    flagUrl?: string;
    name?: string;
    birthDate?: string;
}

export const CardRunner: React.FC<CardLineProps> = ({ flagUrl, name, birthDate, ...props }) => {

  var flag = (flagUrl?.toLowerCase() as keyof typeof images.png) || 'american';
  console.log(flag)
  var image = images.png[flag ] || require('../../assets/png/italy.png')

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.flag} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.birthDate}>Nascido em {birthDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  flag: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    ...RefTextStyle.Inter_bold_700, // Fonte customizada
    fontSize: 16,
    color: Color('NEUTRO_950'),
  },
  birthDate: {
    ...RefTextStyle.Inter_Medium_600, // Fonte customizada
    fontSize: 14,
    color: Color('NEUTRO_500'),
    marginTop: 4,
  },
});
