import ThemeText from '@/components/ThemeText'
import { View } from 'react-native'

const CalculatorApp = () => {
  return (
    <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
      <ThemeText variant="h1">10 * 10</ThemeText>
      <ThemeText variant="h2">1000</ThemeText>
    </View>
  )
}

export default CalculatorApp
