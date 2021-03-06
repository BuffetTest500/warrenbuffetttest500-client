import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const { REACT_APP_SERVER_URL } = process.env;

const requestPortfolioItemDelete = async (userUid, portfolioItemId) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}${PATHS.USERS}/${userUid}/portfolio_items/${portfolioItemId}`, {
    method: METHODS.DELETE,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestPortfolioItemDelete;
