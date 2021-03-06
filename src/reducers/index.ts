import { LOADING, PRODUCT_TAB, DAILYLOOK, PRODUCT_IS_FETCHED, RANKING_IS_FETCHED } from '../actions/ActionTypes';
import * as Types from '../types/Types';

const initialState = {
    currentTab: PRODUCT_TAB,
    type: LOADING,
    productTabItemsJSON: [],
    rankingTabItemsJSON: []
}

const reducers = (state = initialState, action: Types.IDailyLook) => {
    switch(action.type) {
        case DAILYLOOK:
            return {
                ...state,
                type: action.type,
                currentTab: action.currentTab || state.currentTab
            }
        case PRODUCT_IS_FETCHED:
            return {
                ...state,
                type: action.type,
                productTabItemsJSON: action.productTabItemsJSON
            }
        case RANKING_IS_FETCHED:
            return {
                ...state,
                type: action.type,
                rankingTabItemsJSON: action.rankingTabItemsJSON
            }
        default:
            return state;
    }
}

export default reducers;