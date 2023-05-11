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
        }
    },
    handleResponse: (err, onError, response, onSuccess) => {
        if (err) {
            if (!onError || typeof onError !== "function") {
                onErrorDefault(err)
                return
            }
            onError(err)
            return
        }
        if (!onSuccess || typeof onSuccess !== "function") {
            onSuccessDefault()
            return
        }
        onSuccess(response)
    }
}

export default API
