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
          blackText
        />
        <CalculatorButton
          label="+/-"
          onPress={() => console.log('+/-')}
          color={Colors.lightGray}
          blackText
        />
        <CalculatorButton
          label="del"
          onPress={() => console.log('del')}
          color={Colors.lightGray}
          blackText
        />
        <CalculatorButton
          label="÷"
          onPress={() => console.log('÷')}
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => console.log('7')} />
        <CalculatorButton label="8" onPress={() => console.log('8')} />
        <CalculatorButton label="9" onPress={() => console.log('9')} />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => console.log('x')}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => console.log('4')} />
        <CalculatorButton label="5" onPress={() => console.log('5')} />
        <CalculatorButton label="6" onPress={() => console.log('6')} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log('-')}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => console.log('1')} />
        <CalculatorButton label="2" onPress={() => console.log('2')} />
        <CalculatorButton label="3" onPress={() => console.log('3')} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log('+')}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          onPress={() => console.log('0')}
          dobleSize
        />
        <CalculatorButton label="." onPress={() => console.log('.')} />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => console.log()}
        />
      </View>
    </View>
  )
}

export default CalculatorApp
