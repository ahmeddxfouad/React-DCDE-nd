import {logger} from "./logger";
import {validation} from "./validation";
import * as Redux from 'redux'

export const enhancer = Redux.applyMiddleware(validation, logger);
