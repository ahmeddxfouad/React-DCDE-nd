import { takeLatest, select, delay, put } from 'redux-saga/effects'
import {addData, addDataFailure, addDataResult} from "../slices/dataSlicer";

export default function* watchAddData(){
    yield takeLatest(addData.toString(), handleAddData);
}

export function* handleAddData (action) {
    console.log("Fetching Data!!");
    try {
        const data = yield select(state => state.data.data);

        const newData = {
            id: data.length +1,
            name: action.payload
        };

        //pretend calling API
        yield delay(500);

        const result = [...data, newData];

        yield put(addDataResult(result));
    } catch (error) {
        yield put(addDataFailure(error.toString()));
    }
}
