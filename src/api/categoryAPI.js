import Config from "../config/config.js";
import API from "./api.js";

const {CategoryServiceClient} = require("./proto/generated/category_grpc_web_pb.js");
const {CategoryCreateRequest, CategoryUpdateRequest, CategoryDeleteRequest, CategoryGetRequest, CategoryListRequest} = require("./proto/generated/category_pb.js");

const service = new CategoryServiceClient(Config.APIAddress, null, {
    'withCredentials': true
});

const CategoryAPI = {
    Create: (data, onSuccess, onError) => {
        const request = new CategoryCreateRequest();
        request.setName(data.name)
        service.create(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Update: (data, onSuccess, onError) => {
        const request = new CategoryUpdateRequest();
        request.setUuid(data.uuid);
        request.setName(data.name);
        service.update(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Delete: (data, onSuccess, onError) => {
        const request = new CategoryDeleteRequest();
        request.setUuid(data.uuid);
        service.delete(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Get: (data, onSuccess, onError) => {
        const request = new CategoryGetRequest();
        request.setUuid(data.uuid);
        service.get(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    List: (data, onSuccess, onError) => {
        const request = new CategoryListRequest();
        service.list(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    }
}

export default CategoryAPI
