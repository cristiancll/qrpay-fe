import Config from "../config/config.js";
import API from "./api.js";

const {WhatsAppServiceClient} = require("./proto/generated/whatsapp_grpc_web_pb.js");
const {VoidRequest} = require("./proto/generated/whatsapp_pb.js");

const service = new WhatsAppServiceClient(Config.APIAddress, null, {
    'withCredentials': true,
    'grpc.default_stream_initial_metadata_wait_timeout': 10000,
});

const streaming = {
    instance: null,

}

const WhatsAppAPI = {
    QRCodeStream: (onData, onError, onEnd) => {
        if (streaming.instance) {
            onError()
            return
        }
        const request = new VoidRequest();
        streaming.instance = service.qRCodeStream(request, API.getMetadata());
        streaming.instance.on("data", onData);
        streaming.instance.on("error", onError);
        streaming.instance.on("end", onEnd);
    },
    StopQRCodeStream: (onCancel) => {
        if (streaming.instance) {
            streaming.instance.cancel()
            streaming.instance = null;
            onCancel()
        }
    },
    List: (data, onSuccess, onError) => {
        const request = new VoidRequest();
        service.list(request, API.getMetadata(), (err, response) => API.handleResponse(err, onError, response, onSuccess));
    }
}

export default WhatsAppAPI
