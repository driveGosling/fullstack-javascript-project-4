import axios from 'axios';

const fetchPage = (url) => axios.get(url)
  .then((res) => res.data)
  .catch((err) => {
    throw err;
  });

export default fetchPage;
