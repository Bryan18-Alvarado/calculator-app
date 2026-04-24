import { globalStyles } from '@/styles/global-styles'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

const RootLayout = () => {
  //Cargamos la fuente personalizada y obtenemos el estado de carga
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  //Evita renderizar la app hasta que las fuentes estén cargadas

  if (!loaded) {
    return null
  }

  return (
    //Aplicamos flex 1 y color de fondo para que la app ocupe toda la pantalla y tenga el fondo definido en Colors
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  )
}

export default RootLayout
