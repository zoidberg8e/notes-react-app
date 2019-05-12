const urlFor = (endpoint) => {
 var host = window.location.hostname;
 return `http://${host}:8000/api/${endpoint}`;
};

export default urlFor;
