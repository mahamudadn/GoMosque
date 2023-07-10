import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchHistory() {
    console.log('FETCHHISTORY');
    try {
        const history = yield axios.get('api/prayer')
        console.log('get all the prayer history', history.data);
        yield put ({
            type:'SET_HISTORY',
            payload:history.data
        })}
        catch(err) {
            console.log('error getting prayer hitory', err);
        }
}

function* historySaga() {
    yield takeLatest('FETCH_HISTORY', fetchHistory);
}

export default historySaga;