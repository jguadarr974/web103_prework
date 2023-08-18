import React from "react";
import { Col, Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { supabase } from "../suppabaseClient";
import ProductCard from "./productCard";


function SingleCreator (){
  const [products, setProducts]= useState([]);

  useEffect(()=>{
      getProducts();
    },[])
  
    async function getProducts(){
      try{
        const {data, error} = await supabase
          .from("creators")
          .select('name, url, description, imageURL')
          .eq('id',"/SingleCreator")
        if (error) throw error;
        if(data != null){
          setProducts(data);
        }

        console.log(data[0].name)
      }
      catch(error){
        alert(error.message);
      }
    }



  return (
    <Container>
      {products.map((name)=>(
        <Col>
          <ProductCard product={name}/>
        </Col>
      ))}
    </Container>
  );
}

export default SingleCreator;