import { StackNavigator } from 'react-navigation';

import WalletPage from '../page/wallet/WalletPage';

const stackNavigatorConfig = {
    initialRouteName: 'Wallet',
};

export default StackNavigator({
    Wallet: {
        screen: WalletPage,
    },
}, stackNavigatorConfig);