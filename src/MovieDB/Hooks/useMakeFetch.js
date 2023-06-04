const useMakeFetch = async (path = '', method = '', body = {}) => {
    const options = {
      method,
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    if (method !== 'GET') {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(path, options);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response;
  };

  export default useMakeFetch;