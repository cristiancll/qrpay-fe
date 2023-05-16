import Config from "../config/config.js";
import API from "./api.js";

const {SKUServiceClient} = require("./proto/generated/sku_grpc_web_pb.js");
const {SKUCreateRequest, SKUUpdateRequest, SKUDeleteRequest, SKUGetRequest, SKUListRequest} = require("./proto/generated/sku_pb.js");

const service = new SKUServiceClient(Config.APIAddress, null, {
    'withCredentials': true
});

const SkuAPI = {
    Create: (data, onSuccess, onError) => {
        const request = new SKUCreateRequest();
        request.setName(data.name)
        request.setDescription(data.description)
        request.setItemuuid(data.itemUUID)
        request.setPrice(data.price)
        service.create(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Update: (data, onSuccess, onError) => {
        const request = new SKUUpdateRequest();
        request.setUuid(data.uuid);
        request.setName(data.name)
        request.setDescription(data.description)
        request.setItemuuid(data.itemUUID)
        request.setPrice(data.price)
        service.update(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Delete: (data, onSuccess, onError) => {
        const request = new SKUDeleteRequest();
        request.setUuid(data.uuid);
        service.delete(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Get: (data, onSuccess, onError) => {
        const request = new SKUGetRequest();
        request.setUuid(data.uuid);
        service.get(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    List: (data, onSuccess, onError) => {
        const request = new SKUListRequest();
        service.list(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    }
}

export default SkuAPI
