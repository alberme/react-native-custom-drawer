import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}
    >
      <View style={{ margin: 20 }}>
        <TouchableOpacity
          style={{ backgroundColor: '#AD40AF', padding: 20, width: '90%', borderRadius: 10, marginBottom: 50, flexDirection: 'row', justifyContent: 'space-between' }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>
            Let's Begin
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}