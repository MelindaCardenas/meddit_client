const getServerURL = () => {
    if (process.env.NODE_ENV === 'production') {
      //return 'https://medditt';
      return "no URL made yet"
    }
    return 'http://localhost:7000';
};

export default getServerURL;