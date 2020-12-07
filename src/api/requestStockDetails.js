import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestStockDetails = async keyword => {
  const response = await fetch(
    `${PATHS.HOST}${PATHS.SERVER_PORT}${PATHS.SYMBOLS}/${keyword}`,
    {
      method: METHODS.GET,
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    },
  );

  return await response.json();
};

export default requestStockDetails;
