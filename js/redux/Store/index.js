/**
 * Created by dp-ptcstd-34 on 10/4/2016.
 */

import { createStore,applyMiddleware } from 'redux'
import {rootReducer} from '../Reducer'

export default function configureStore(initialState) {
    return createStore(rootReducer);
}
