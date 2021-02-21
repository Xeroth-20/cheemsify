const baseUrl = process.env.REACT_APP_API_URL;

const handleError = () => {
    return {
        error: {
            type: 'Fetch error',
            message: 'Ocurrió un error al realizar la petición.'
        }
    };
};

export const createCard = (card) => {
    const body = JSON.stringify(card);

    return fetch(`${baseUrl}/cards`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'content-length': body.length
        },
        body
    }).then((response) => response.json())
    .catch(handleError);
};

export const getCardList = (dateToken, date, page, perpage) => {
    return fetch(`${baseUrl}/cards?date=${date}&page=${page}&perpage=${perpage}`, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${dateToken || ''}`,
            'accept': 'application/json'
        }
    }).then((response) => response.json())
    .catch(handleError);
};
