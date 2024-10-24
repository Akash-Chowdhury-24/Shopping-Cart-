import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const globalcontext = createContext(null);

export function GlobalState({children}){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product,setProduct] = useState([]);
  const [productDetails,setProductDetails] = useState();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  async function fetchproduct(){
    try{
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      if(data){
        setProduct(data.products);
        setLoading(false)
        setError(null)
      }else{
        setProduct([])
        setLoading(false)
      }
    }catch(error){
      setError(error);
      console.log(error);
    }
  }

  function handleAddToCart(getProduct){
    const p=[...cart];
    const index = p.findIndex((item)=>item.id === getProduct?.id);
    if(index === -1){
      p.push({
        ...getProduct,
        quantity:1,
        total : getProduct?.price
      });
    }else{
      p[index].quantity += 1;
      p[index].total = p[index].quantity * getProduct?.price;
    }
    setCart(p);
    localStorage.setItem('cart',JSON.stringify(p));
    navigate('/cart')
  }

  function remove(getProduct){
    const p=[...cart];
    const index = p.findIndex((item)=>item.id === getProduct?.id);
    if(index !== -1){
      p.splice(index,1);
    }
    setCart(p);
    localStorage.setItem('cart',JSON.stringify(p));
  }

  function update(getProduct,todo){
    const p=[...cart];
    const index = p.findIndex((item)=>item.id === getProduct?.id);
    if(todo === 'add'){
      p[index].quantity += 1;
      p[index].total = p[index].quantity * getProduct?.price;
    }else if(todo === 'sub'){
      p[index].quantity -= 1;
      p[index].total = p[index].quantity * getProduct?.price;
    }
    setCart(p);
    localStorage.setItem('cart',JSON.stringify(p));
  }
  useEffect(()=>{
    fetchproduct();
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));   
  },[])

  return (
    <globalcontext.Provider value={{product,loading,setLoading,productDetails,setProductDetails,handleAddToCart,remove,update,cart}}>
      {children}
    </globalcontext.Provider>
  )
}

