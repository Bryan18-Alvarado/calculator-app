import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { globalStyles } from '@/styles/global-styles'
import { View } from 'react-native'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">10 * 10</ThemeText>
        <ThemeText variant="h2">1000</ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          onPress={() => console.log('C')}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="+/-"
          onPress={() => console.log('+/-')}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="del"
          onPress={() => console.log('del')}
          color={Colors.lightGray}
        />
        <CalculatorButton label="÷" onPress={() => console.log('÷')} />
      </View>
    </View>
  )
}

export default CalculatorApp
