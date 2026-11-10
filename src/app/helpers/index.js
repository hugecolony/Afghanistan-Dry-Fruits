import products from "../../../_data/dryfruits.json";

export const getData = async () => products;

export const getSingleProduct = async (ID) =>
    products.find((product) => product.ID === ID);
