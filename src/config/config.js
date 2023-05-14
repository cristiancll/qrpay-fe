const Config = {
    APIAddress: getAPIAddress(),

}

function getAPIAddress() {
    return process.env.API_ADDRESS || "https://localhost:8443";
}


export default Config;
