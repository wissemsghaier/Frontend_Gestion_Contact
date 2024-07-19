//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Alert } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
//import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addContactAction, listerContact , deleteContactAction, editContactAction} from "./actions/contact.actions";
import { Alert} from "react-bootstrap";

function App() {
  const contacts = useSelector((state) => state.contact.contacts.contactListe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listerContact());
  }, [dispatch]);

  const [id , setId] = useState('');
  const [ nom , setNom ] = useState('');
  const [numero , setNumero ]= useState('');
  const addContact = async() => {
    console.log(nom);
    console.log(numero)
    const data = {
      nom , 
      numero
    }
    await dispatch(addContactAction(data))
    await dispatch(listerContact())
    // close Model 
    handleClose()
    // rest lel form
    setNom('')
    setNumero('')
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(false);
  const handleCloseEdit = () => setEdit(false);


  const handleShowEdit = (id) => {
    
    contacts.forEach(c => {
      if(c._id == id){
        setId(c._id)
        setNom(c.nom)
        setNumero(c.numero)
        console.log(c);

      }
    })
    console.log(id);


    setEdit(true);
  }



  const  deleteContact = async (id) => {
    //console.log(id);
    await dispatch(deleteContactAction(id)) 
    await dispatch(listerContact()) 
  }


  const editContact = async() => {
    //console.log(nom);
    //console.log(numero)

     const data = {
      nom , 
      numero
    }
    await dispatch(editContactAction(id,data))
    await dispatch(listerContact())
    // // close Model 
     handleCloseEdit()
    // // rest lel form
     setNom('')
     setNumero('')
     setId ('')
  }



  return (
    <div className="App">
      {/*navbar*/}
      <Navbar bg="primary " expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Contact App</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="p-4">
        <Button variant="info" onClick={handleShow}>
          ajouter
        </Button>{" "}
        <h2>Liste des contacts </h2>
        {
        contacts && contacts.length > 0  ? 
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Numero</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              contacts.map((contact, index) => 
                <tr key={index}>
                  <td>{index}</td>
                  <td> {contact.nom}</td>
                  <td> {contact.numero}</td>
                  <td>
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={() => handleShowEdit(contact._id)} >{" "}  modifier </Button>
                    <Button variant="danger" onClick={ () => deleteContact (contact._id)}>supprimer</Button>
                  </td>
                </tr>
              )
              }
            </tbody>
          </Table>
         : <Alert variant='info'>
        "aucun contact trouver .. "
      </Alert>

      }
      </div>
      {/* popuo add  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text" value = {nom} onChange={(e)=> {setNom(e.target.value)}} placeholder="Entrer  nom pour cette contact"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" value={numero} onChange={(e)=> {setNumero(e.target.value)}} placeholder="entrer Contact " />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={addContact}   >Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* popuo modifier  */}
      <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>modifier Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" value = {nom} onChange={(e)=> {setNom(e.target.value)}} placeholder="Entrer  nom pour cette contact" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text"  value={numero} onChange={(e)=> {setNumero(e.target.value)}} placeholder="entrer Contact " />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={editContact}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
