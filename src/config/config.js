const config = require("./config.json")

const Config = {
    APIAddress: getAPIAddress(),

}

function getAPIAddress() {
    if (config.APIAddress) {
        return config.APIAddress;
    }
    return "https://localhost:8443";
}


export default Config;
