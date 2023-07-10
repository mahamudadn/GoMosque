import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* deleteHistory(action) {
    console.log('DELETE HISTORY SAGA', action.payload);
    try {
        yield axios.delete(`api/prayer/${action.payload}`)
        console.log('deleting the prayer history', action);
        yield put ({ type:'FETCH_HISTORY'})
    }
        catch(err) {
            console.log('error deleting prayer hitory', err);
        }
}

function* deleteSaga() {
    yield takeLatest('DELETE_HISTORY', deleteHistory);
}

export default deleteSaga;