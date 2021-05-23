<<<<<<< HEAD
const _ = require('lodash');
const noEnvFile = process.env.NO_ENVFILE;
if (_.isNil(noEnvFile)) require('dotenv').config();
module.exports.nodeEnv = process.env.NODE_ENV;
=======
const _ = require("lodash");
const noEnvFile = process.env.NO_ENVFILE;
if (_.isNil(noEnvFile)) require("dotenv").config();
module.exports.nodeEnv = process.env.NODE_ENV;
>>>>>>> d44607124b08d0ffa3f7e15c1cb1f36f385909fa
