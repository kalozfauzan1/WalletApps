import { Provider } from 'mobx-react';
import Routes from './routes/routes';
import stores from './store/index';

export default class App extends Component {

    render() {
        return (
            // provider = call the master store
            <Provider {...stores}>
                {/*this place to call routes*/}
                <Routes />
            </Provider>
        );
    }
}