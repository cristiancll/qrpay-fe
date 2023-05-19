const Config = {
    APIAddress: getAPIAddress(),

}

function getAPIAddress() {
    return process.env.API_ADDRESS;
}


export default Config;
