import { globalStyles } from '@/styles/global-styles'
import { Pressable, Text } from 'react-native'
import { Colors } from '../constants/theme'
interface Props {
  label: string
  color?: string
  blackText?: boolean
  onPress: () => void
}

const calculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText,
  onPress
}: Props) => {
  return (
    <Pressable>
      <Text style={globalStyles.button} onPress={onPress}>
        {label}
      </Text>
    </Pressable>
  )
}
export default calculatorButton
