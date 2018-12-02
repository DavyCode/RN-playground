import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer'
import LibrarySelect from './LibrarySelect'

export default combineReducers({
    Library : LibraryReducer,
    SelectLibraryId: LibrarySelect
});