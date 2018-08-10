// é necessário ter um reducer primeiro para ter uma storie

import {createStore} from 'redux';
// importa direto do index, que já está combined
import reducers from './reducers';

const store = createStore(reducers);

export default store;