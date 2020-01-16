import axios from 'axios';

export const selectHouse = house => {
    return {
        type: "SELECT_HOUSE",
        payload: house
    }
}

export const getRandomHouse = () => {
    console.log("yo")
    return dispatch => {
        console.log("ya")
        dispatch({
            type: "SELECT_HOUSE",
            payload: "stand by"
        });

        axios.get('https://www.potterapi.com/v1/sortingHat')
            .then(result => {
                console.log(result.data)
                dispatch({
                    type: "SELECT_HOUSE",
                    payload: result.data
                })
            })
    }
}
