import axios from "axios";
import actionList from './actions';

export const selectHouse = house => ({
    type: actionList.SELECT_HOUSE,
    prout: house
})

export const getRandomHouse = () => {
    return (dispatch,getState) => {
        console.log(getState())
        dispatch({
            type: actionList.SELECT_HOUSE,
            prout: "loading..."
        })
        axios.get('https://www.potterapi.com/v1/sortingHat')
            .then(result => {
                dispatch({
                    type: actionList.SELECT_HOUSE,
                    prout: result.data
                })
            })
    }
}