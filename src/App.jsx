import { useState, useEffect} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, Form, Row, Col, Button} from 'react-bootstrap'
import ProductCard from './components/productCard'
import { supabase } from './suppabaseClient'

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [creators, setCreators]= useState([]);
  const [imageURL, setImageURL] = useState("");

  useEffect(()=>{
    getCreators();
  },[])

  async function getCreators(){
    try{
      const {data, error} = await supabase
        .from("creators")
        .select("*")
      if (error) throw error;
      if(data != null){
        setCreators(data);
      }
    }
    catch(error){
      alert(error.message);
    }
  }

  async function createProduct(){
    try{
      const {data, error} = await supabase
        .from("creators")
        .insert({
          name:name,
          description:description,
          imageURL:imageURL
        })
        .single()
      if (error) throw error;
      window.location.reload();
    }
    catch(error){
      alert(error.message);
    }
  }

  return (
    <>
     <Navbar>
      <Container>
        <Navbar.Brand>YouTube Content Creaters</Navbar.Brand>
      </Container>
     </Navbar>
     <Container>
      <Row>
        <Col xs={12} md={8}>
          <h3>Add New Creator!</h3>
          <Form.Label>Creator's Name</Form.Label>
          <Form.Control 
          type='text'
          id='name'
          onChange={(e)=>setName(e.target.value)}
          />
          <Form.Label>Creator's Description</Form.Label>
          <Form.Control 
          type='text'
          id='description'
          onChange={(e)=>setDescription(e.target.value)}
          />
          <Form.Label>Creator's Profile Image</Form.Label>
          <Form.Control 
          type='text'
          id='imageURL'
          onChange={(e)=>setImageURL(e.target.value)}
          />
          <br></br>
          <Button  onClick={()=> createProduct()}>Add Creator</Button>
        </Col>
      </Row>
      <hr></hr>
      <h3 style={{textAlign: "center", margin:"2rem"}}>Current List of Creators</h3>
      <Row xs={1} lg={3} class="g-4">
        {creators.map((product)=>(
          <Col>
          <ProductCard product={product}/>
          </Col>
        ))}
      </Row>
     </Container>
    </>
  )
}

export default App
