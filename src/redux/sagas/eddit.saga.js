import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* editHistory(action) {
    try {
        yield axios.put(`api/prayer/${action.payload}`)
        console.log('edditing the prayer history', action);
        yield put ({ type:'FETCH_HISTORY',
        
        })}
        catch(err) {
            console.log('error deleting prayer hitory', err);
        }
}

function* edditSaga() {
    yield takeLatest('EDIT_HISTORY', editHistory);
}

export default edditSaga;