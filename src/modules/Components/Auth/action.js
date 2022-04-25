export function Register(payload) {
    return (dispatch) => {
        dispatch({
            type: 'Register',
            payload: payload
        })
    }
}
export function ToggleLogin(payload) {
    return (dispatch) => {
        dispatch({
            type: 'Toggle_Login',
            payload: payload
        })
    }
}