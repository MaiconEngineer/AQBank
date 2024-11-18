import React from 'react';
import { StyleSheet, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { RefTextStyle } from '../../theme/fonts';
import { Icon } from '../../theme/icons';
import { Color } from '../../theme/colors';

interface CardLineProps {
  iconName?: string | null; 
  iconColor?: string; 
  position?: number;
  text?: string;
}

export const CardLine: React.FC<CardLineProps> = ({
  iconName = null,
  iconColor = '',
  position = 0,
  text,
}) => {
  const IconSvg = iconName ? Icon(iconName) : null;
  const colorIcon = iconColor ? Color(iconColor) : '';

  return (
    <View style={styles.container}>
      {iconName ? <IconSvg width={20} height={20} fill={colorIcon} /> : null}
      <View style={styles.text}>
        <Text style={styles.textPosition}>{`${position}º`}</Text>
        <Text style={styles.textName}>Max Verstappen</Text>
        <Text style={styles.textTypeCar}>Red Bull</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...RefTextStyle.Inter_Medium_600,
    flexDirection: 'row',
  },
  textPosition: {
    ...RefTextStyle.Inter_Medium_600,
    paddingHorizontal: 8,
  },
  textName: {
    ...RefTextStyle.Inter_Medium_600,
  },
  textTypeCar: {
    ...RefTextStyle.Inter_Medium_600,
    paddingLeft: 8,
    opacity: 0.5,
  },
});
