import React from 'react';
import { Text, StyleSheet, TouchableOpacity, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Color } from '../../theme/colors';
import { Icon } from '../../theme/icons';
import { RefTextStyle } from '../../theme/fonts';

interface ButtonPrimaryProps {
  title?: string;
  iconName?: string | null;
  onPress?: (event: GestureResponderEvent) => void;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  title = '',
  iconName = null,
  onPress,
}) => {
  const IconSvg = iconName ? Icon(iconName) : null;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {IconSvg && <IconSvg width={24} height={24} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color('NEUTRO_900'),
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  title: {
    ...RefTextStyle.Inter_bold_700,
    color: Color('PRIMARY_200'),
    fontSize: 14,
  },
});
