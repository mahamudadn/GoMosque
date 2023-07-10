import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchWeekly() {
    console.log('FETCH WEEKLY SAGA');
    try {
        const weekly = yield axios.get('/api/weekly')
        console.log('get all the prayer history', weekly.data);
        yield put ({
            type:'SET_WEEKLY',
            payload:weekly.data
        })}
        catch(err) {
            console.log('error getting prayer hitory', err);
        }
}

function* weeklySaga() {
    yield takeLatest('FETCH_WEEKLY', fetchWeekly);
}

export default weeklySaga;