import Config from "../config/config.js";
import API from "./api.js";

const {UserServiceClient} = require("./proto/generated/user_grpc_web_pb.js");
const {UserUpdateRoleRequest, UserCreateRequest, UserGetRequest, UserAdminCreatedRequest, UserUpdateRequest, UserDeleteRequest, UserListRequest} = require("./proto/generated/user_pb.js");

const service = new UserServiceClient(Config.APIAddress, null, {
    'withCredentials': true
});

const UserAPI = {
    Create: (data, onSuccess, onError) => {
        const request = new UserCreateRequest();
        request.setName(data.name);
        request.setPhone(data.phone);
        request.setPassword(data.password);
        service.create(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    AdminCreated: (data, onSuccess, onError) => {
        const request = new UserAdminCreatedRequest();
        request.setName(data.name);
        request.setPhone(data.phone);
        service.adminCreated(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));

    },
    Get: (data, onSuccess, onError) => {
        const request = new UserGetRequest();
        request.setUuid(data.uuid);
        service.get(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Update: (data, onSuccess, onError) => {
        const request = new UserUpdateRequest();
        request.setUuid(data.uuid);
        request.setName(data.name);
        request.setPhone(data.phone);
        request.setPassword(data.password);
        service.update(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Delete: (data, onSuccess, onError) => {
        const request = new UserDeleteRequest();
        request.setUuid(data.uuid);
        service.delete(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    List: (data, onSuccess, onError) => {
        const request = new UserListRequest();
        service.list(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    UpdateRole: (data, onSuccess, onError) => {
        const request = new UserUpdateRoleRequest();
        request.setUuid(data.uuid);
        request.setRole(data.role);
        request.setEnabled(data.enabled);
        service.updateRole(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    }
}

export default UserAPI
