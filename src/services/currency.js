import "isomorphic-fetch"


export const CurrencyService = {
    read: async (id) => {

        let response = await fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${id}?format=json`);
        let data = await response.json();
        return data.rates[0].mid;
    },

};



