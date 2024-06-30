const ClientErrorsCodes = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHERISED: 401,
    NOT_FOUND: 404
});


const ServerErrorsCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED:501

});


const SuccessCodes = Object.freeze({
    OK: 201,
    CREATED: 201

});

module.exports = {
    ClientErrorsCodes,
    ServerErrorsCodes,
    SuccessCodes
}
