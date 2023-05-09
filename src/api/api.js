import UserAPI from "./userAPI.js";
import AuthAPI from "./authAPI.js";

const { StatusCode } = require('grpc-web');
function onErrorDefault(err) {
    console.log(`Error: ${err.code}\nMessage: ${err.message}`);
}
function onSuccessDefault() {
    console.warn("No success handler provided!")
}

const API = {
    User: UserAPI,
    Auth: AuthAPI,

    getMetadata: () => {
        return {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    },
    handleResponse: (err, onError, response, onSuccess) => {
        if (err) {
            if (err.code === StatusCode.UNAUTHENTICATED) {
                window.location.href = "/login"
                return
            }
            if (!onError) {
                onErrorDefault(err)
                return
            }
            onError(err)
            return
        }
        if (!onSuccess) {
            onSuccessDefault()
            return
        }
        onSuccess(response)
    }
}

export default API
