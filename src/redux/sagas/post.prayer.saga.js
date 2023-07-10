import axios from 'axios'; 
import { put, takeLatest } from 'redux-saga/effects';


function* postPryer(action){
    console.log('POST PRAYER SAGA', action.payload);
    try{ 
        yield axios.post('/api/prayer/', action.payload);

        yield put({
            type: 'FETCH_HISTORY'
        });
    } catch (error){
        console.log(err,'error in postPrayer Saga');
        if(error.response.status ===500){

            yield put ({type:'POST_ERR'});
        }
    }
}

function* makePost(){
    yield takeLatest('POST_PRAYER', postPryer)
}

export default makePost;