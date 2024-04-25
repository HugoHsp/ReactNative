
export const fetchProducts = async () => {
    try{
        let data = await fetch(`https://fakestoreapi.com/products`);
        data = await data.json();
        return data;
    }catch(e){
        throw new Error(e);
    }
}