import React from "react";
import { Card, Row, Col, Button, Form, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { supabase } from "../suppabaseClient";
import ProductCard from './productCard'


function Creator2 (){
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        getProducts();
      },[])
    
      async function getProducts(){
        try{
          const {data, error} = await supabase
            .from("creators")
            .select('name, url, description, imageURL')
            .eq('id',"/Creator2")
          if (error) throw error;
          if(data != null){
            setProducts(data);
          }
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

export default Creator2