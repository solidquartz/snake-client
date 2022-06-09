const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const gameConnect = connect();

setupInput(gameConnect);