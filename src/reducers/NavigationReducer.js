import { CHANGENAVI } from '../actions/NavigationAction';
export default (previousState = 0, { type, payload }) => {
    if (type === CHANGENAVI) {
        return payload;
    }
    return previousState;
};