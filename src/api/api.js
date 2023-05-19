import UserAPI from "./userAPI.js";
import AuthAPI from "./authAPI.js";
import CategoryAPI from "./categoryAPI.js";
import ItemAPI from "./itemAPI.js"
import SkuAPI from "./skuAPI.js"
import StockAPI from "./stockAPI.js"
import WhatsAppAPI from "./whatsAppAPI.js"
import SaleAPI from "./saleAPI.js"
import RetrievalAPI from "./retrievalAPI.js"

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
    Category: CategoryAPI,
    Item: ItemAPI,
    SKU: SkuAPI,
    WhatsApp: WhatsAppAPI,
    Stock: StockAPI,
    Sale: SaleAPI,
    Retrieval: RetrievalAPI,
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
