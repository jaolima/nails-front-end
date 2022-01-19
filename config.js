const dev = {
  BASE_URL: "http://127.0.0.1:3333/"
}

const prod = {
  BASE_URL: process.env.REACT_APP_STAGE
}

const config = process.env.REACT_APP_STAGE !== "development" ? dev : prod;
// const config = dev;

export default {
  ...config,
}