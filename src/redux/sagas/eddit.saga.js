import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* editHistory(action) {
    console.log('EDIT HISTORY SAGA', action.payload);
    try {
        yield axios.put(`api/prayer/${action.payload.prayer}`, action.payload)
        console.log('edditing the prayer history', action);
        yield put ({ type:'FETCH_HISTORY'})
        yield put({type:'FETCH_WEEKLY'})
    }
        catch(err) {
            console.log('error edditing prayer hitory', err);
        }
}

function* edditSaga() {
    yield takeLatest('EDIT_HISTORY', editHistory);
}

export default edditSaga;