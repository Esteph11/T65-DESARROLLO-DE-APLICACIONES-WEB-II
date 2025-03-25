import axios from "axios";

const API_URL='http://localhost:5000';

export const getPromedioProductoSegmento = async()=>{
    const response = await axios.get(`${API_URL}/promedio-producto-segmento`);

    return response.data
}

export const getSumaProductosMarca = async()=>{
    const response = await axios.get(`${API_URL}/count-productos-marca`);

    return response.data
}

export const getValorProductosCategoria = async()=>{
    const response = await axios.get(`${API_URL}/count-productos-categoria`);

    return response.data
}