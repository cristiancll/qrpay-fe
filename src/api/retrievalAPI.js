import React from "react";
import Config from "../config/config.js";
import API from "./api.js";

const {RetrievalServiceClient} = require("./proto/generated/retrieval_grpc_web_pb.js");
const {RetrievalCreateRequest, RetrievalUpdateRequest, RetrievalDeleteRequest, RetrievalGetRequest, RetrievalListRequest} = require("./proto/generated/retrieval_pb.js");

const service = new RetrievalServiceClient(Config.APIAddress, null, {
    'withCredentials': true
});


const RetrievalAPI = {
    Create: (data, onSuccess, onError) => {
        const request = new RetrievalCreateRequest();
        request.setUseruuid(data.uuid);
        request.setSaleitemuuidsList(data.saleItemUUIDs);
        service.create(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Update: (data, onSuccess, onError) => {
        const request = new RetrievalUpdateRequest();
        request.setUuid(data.uuid);
        request.setDelivered(data.delivered);
        service.update(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Delete: (data, onSuccess, onError) => {
        const request = new RetrievalDeleteRequest();
        request.setUuid(data.uuid);
        service.delete(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Get: (data, onSuccess, onError) => {
        const request = new RetrievalGetRequest();
        request.setUuid(data.uuid);
        service.get(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    List: (data, onSuccess, onError) => {
        service.list(new RetrievalListRequest(), API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
}

export default RetrievalAPI
