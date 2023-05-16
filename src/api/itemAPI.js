import Config from "../config/config.js";
import API from "./api.js";

const {ItemServiceClient} = require("./proto/generated/item_grpc_web_pb.js");
const {ItemCreateRequest, ItemUpdateRequest, ItemDeleteRequest, ItemGetRequest, ItemListRequest} = require("./proto/generated/item_pb.js");

const service = new ItemServiceClient(Config.APIAddress, null, {
    'withCredentials': true
});

const ItemAPI = {
    Create: (data, onSuccess, onError) => {
        const request = new ItemCreateRequest();
        request.setName(data.name)
        request.setCategoryuuid(data.categoryUUID)
        service.create(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Update: (data, onSuccess, onError) => {
        const request = new ItemUpdateRequest();
        request.setUuid(data.uuid);
        request.setName(data.name);
        request.setCategoryuuid(data.categoryUUID)
        service.update(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Delete: (data, onSuccess, onError) => {
        const request = new ItemDeleteRequest();
        request.setUuid(data.uuid);
        service.delete(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Get: (data, onSuccess, onError) => {
        const request = new ItemGetRequest();
        request.setUuid(data.uuid);
        service.get(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    List: (data, onSuccess, onError) => {
        const request = new ItemListRequest();
        service.list(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    }
}

export default ItemAPI
