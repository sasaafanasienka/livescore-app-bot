const BASE_URL = 'http://localhost:3000';
export var ENDPOINT;
(function (ENDPOINT) {
    ENDPOINT["REGISTER"] = "/register";
    ENDPOINT["ADD_GAME"] = "/addgame";
})(ENDPOINT || (ENDPOINT = {}));
export const getEndpoint = (path) => {
    return BASE_URL + path;
};
