export default class HttpClient {
  defaultParams = {
    protocol: "http",
    host: "",
  };

  constructor(defaultParams = {}) {
    Object.assign(this.defaultParams, defaultParams);

    if (!this.defaultParams.host) {
      throw Error('The param "host" is not defined.');
    }
  }

  getAddress(url = "/") {
    const { protocol, host } = this.defaultParams;
    return `${protocol}://${host}${url}`;
  }

  async get(url) {
    const address = this.getAddress(url);
    const response = await fetch(address, { method: "GET" });
    return await response.json();
  }
}
