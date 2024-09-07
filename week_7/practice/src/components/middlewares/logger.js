
export const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log("The actions is: "+ action.type);
    const result = next(action);
    console.log("The current state: "+store.getState().counter);
    console.groupEnd();
    return result;
}
