import React from 'react';
import { View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Splash = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#333333'
        }}>
            <Fontisto
                name={'blood-drop'}
                color={'#49e61e'}
                size={162}
            />
        </View>
    );
}

export { Splash };