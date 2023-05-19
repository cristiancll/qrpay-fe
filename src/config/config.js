const Config = {
    APIAddress: getAPIAddress(),

}

function getAPIAddress() {
    return process.env.REACT_APP_API_ADDRESS;
}


export default Config;
