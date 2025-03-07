/* eslint-disable spaced-comment */
/* eslint-disable prefer-destructuring */
const fs = require("fs");
const path = require("path");
const paths = require("./paths");

delete require.cache[require.resolve("./paths")];

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error(
    "The NODE_ENV environment variable is required but was not specified.",
  );
}
let dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  NODE_ENV !== "test" && `${paths.dotenv}.local`,
  paths.dotenv,
].filter(Boolean);

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    require("dotenv").config({
      path: dotenvFile,
    });
  }
});

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || "")
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);

const REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
  const raw = Object.keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV: process.env.NODE_ENV || "development",
        PUBLIC_URL: publicUrl,
        // API: `http://10.0.10.37:8876/mn/api`,
        API: `http://localhost:3001/api/v1`,
        IMAGE: `http://localhost:3001/api/v1/uploads/`,
        IMAGES: `http://10.0.0.22:8876/`,
      },
    );

  const stringified = {
    "process.env": Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };

  return { raw, stringified };
}

module.exports = getClientEnvironment;
