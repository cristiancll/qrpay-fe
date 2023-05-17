import Config from "../config/config.js";
import API from "./api.js";

const {StockServiceClient} = require("./proto/generated/stock_grpc_web_pb.js");
const {StockCreateRequest, StockUpdateRequest, StockDeleteRequest, StockGetRequest, StockListRequest} = require("./proto/generated/stock_pb.js");

const service = new StockServiceClient(Config.APIAddress, null, {
    'withCredentials': true
});

const StockAPI = {
    Create: (data, onSuccess, onError) => {
        const request = new StockCreateRequest();
        request.setSkuuuid(data.sku);
        request.setQuantity(data.quantity);
        service.create(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Update: (data, onSuccess, onError) => {
        const request = new StockUpdateRequest();
        request.setUuid(data.uuid);
        request.setQuantity(data.quantity);
        service.update(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    Get: (data, onSuccess, onError) => {
        const request = new StockGetRequest();
        request.setUuid(data.uuid);
        service.get(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    },
    List: (data, onSuccess, onError) => {
        const request = new StockListRequest();
        service.list(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    }
}

export default StockAPI
