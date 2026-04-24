import { globalStyles } from '@/styles/global-styles'
import * as Haptics from 'expo-haptics'
import { Pressable, Text } from 'react-native'
import { Colors } from '../constants/theme'
interface Props {
  label: string
  color?: string
  blackText?: boolean
  onPress: () => void
  dobleSize?: boolean
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText,
  onPress,
  dobleSize
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1, //Feedback al presionar
        width: dobleSize ? 180 : 80 //Si es dobleSize, el ancho es 170, sino 80
      })}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        onPress()
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white'
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default CalculatorButton
