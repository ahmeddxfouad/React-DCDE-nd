import { all } from 'redux-saga/effects'
import watchAddData from "./sagas";

export default function* rootSaga() {

 yield all([
     watchAddData(),
     //another watch functions
     ])

}
