import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestPortfolioItemUpdate = async (user, data, portfolioItemId) => {
  const response = await fetch(
    `${PATHS.HOST}${PATHS.SERVER_PORT}${PATHS.USERS}/${user.uid}/portfolio_items/${portfolioItemId}`,
    {
      method: METHODS.PUT,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  return await response.json();
};

export default requestPortfolioItemUpdate;