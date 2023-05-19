import React from "react";
import Config from "../config/config.js";
import API from "./api.js";

const {SaleServiceClient} = require("./proto/generated/sale_grpc_web_pb.js");
const {ListAvailableSaleItemsByUserRequest, SaleUnit, SaleCreateRequest, SaleUpdateRequest, SaleDeleteRequest, SaleGetRequest, SaleListRequest} = require("./proto/generated/sale_pb.js");

const service = new SaleServiceClient(Config.APIAddress, null, {
    'withCredentials': true
});

const SaleAPI = {
    Create: (data, onSuccess, onError) => {
        const request = new SaleCreateRequest();
        request.setUseruuid(data.uuid);
        const saleUnits = Object.keys(data.order).map((uuid) => {
            const saleUnit = new SaleUnit();
            saleUnit.setQuantity(data.order[uuid].quantity);
            saleUnit.setSkuuuid(uuid);
            return saleUnit;
        })
        request.setUnitsList(saleUnits);
        service.create(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Update: (data, onSuccess, onError) => {
        const request = new SaleUpdateRequest();
        request.setUuid(data.uuid);
        request.setName(data.name);
        request.setCategoryuuid(data.categoryUUID)
        service.update(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Delete: (data, onSuccess, onError) => {
        const request = new SaleDeleteRequest();
        request.setUuid(data.uuid);
        service.delete(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Get: (data, onSuccess, onError) => {
        const request = new SaleGetRequest();
        request.setUuid(data.uuid);
        service.get(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    List: (data, onSuccess, onError) => {
        const request = new SaleListRequest();
        service.list(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    ListAvailableByUser: (date, onSuccess, onError) => {
        const request = new ListAvailableSaleItemsByUserRequest();
        request.setUseruuid(date.uuid);
        service.listAvailableSaleItemsByUser(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
}

export default SaleAPI
