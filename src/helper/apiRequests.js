const API_KEY = ``;

const requests = {
    getDataByNetwork: (networkId) => { return `/tv?api_key=${API_KEY}&language=en-US&page=1&with_networks=${networkId}` }
}

