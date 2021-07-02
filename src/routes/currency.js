import { CurrencyService } from "../services/currency.js";

export const getRate = async (req, res) => {
    const { params } = req;
    if (!params?.id) return res.json({ data: [] });
    
    return res.json({ data: await CurrencyService.read(params.id) });
};

