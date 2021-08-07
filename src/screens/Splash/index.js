import React from 'react';
import { View } from 'react-native';
import { DROPSVG } from '~/assets';
import { W } from '~/utils/dimensions';

const Splash = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(40, 40, 40, 1)'
            }}>
            <DROPSVG width={W(48)} height={W(48)} />
        </View>
    );
}

export { Splash };