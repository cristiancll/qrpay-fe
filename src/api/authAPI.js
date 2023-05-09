import Config from "../config/config.js";
import API from "./api.js";

const {AuthServiceClient} = require("./proto/auth_grpc_web_pb.js");
const {AuthLoginRequest, AuthVoid} = require("./proto/auth_pb.js");

const service = new AuthServiceClient(Config.APIAddress, null, null);

const AuthAPI = {
    Login: (data, onSuccess, onError) => {
        const request = new AuthLoginRequest();
        request.setUser(data.user);
        request.setPassword(data.password);
        service.login(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Logout: (data, onSuccess, onError) => {
        const request = new AuthVoid();
        service.logout(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    }
}

export default AuthAPI
