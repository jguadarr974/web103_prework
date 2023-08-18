import React from "react";
import { Card, Button, Form, ButtonToolbar } from "react-bootstrap";
import { useState } from "react";
import { supabase } from "../suppabaseClient";
import './productCard.css';


function ProductCard(props) {
  const product = props.product;

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [imageURL, setImageURL] = useState(product.imageURL);
  const [url, setURL] = useState(product.url)


  async function updateProduct(){
    try{
        const {data, error} = await supabase
          .from("creators")
          .update({
            name:name,
            description:description,
            imageURL:imageURL,
            url:url
          })
          .eq("name", product.name)
  
        if (error) throw error;
        window.location.reload();
      }
      catch(error){
        alert(error.message);
      }
  }

  async function deleteProduct(){
    try{
        const {data, error} = await supabase
          .from("creators")
          .delete()
          .eq("name", product.name)
  
        if (error) throw error;
        window.location.reload();
      }
      catch(error){
        alert(error.message);
      }
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {editing == false ? (
          <><a href={product.id}>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <img src={product.imageURL}/>
            </a>
            <div className="wrapper">
              <Button><a href={product.url} className="link">View Content</a></Button>
              <Button variant="danger" onClick={()=>deleteProduct()}>Delete</Button>
              <Button variant="secondary" onClick={() => setEditing(true)}>Edit</Button>
            </div>
          </>
        ) : (
          <>
            <h4>Editing Profile</h4>
            <Button class="sm" onClick={() => setEditing(false)}>
              Cancel
            </Button>
            <br />
            <Form.Label>Creator's Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              defaultValue={product.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Creator's Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              defaultValue={product.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Label>Creator's Picture</Form.Label>
            <Form.Control
              type="text"
              id="imageURL"
              defaultValue={product.imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            <Form.Label>Link Creator's Url</Form.Label>
            <Form.Control
              type="text"
              id="url"
              defaultValue={product.url}
              onChange={(e)=> setURL(e.target.value)}
            />
            <br></br>
            <Button onClick={()=> updateProduct()}>Update</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;