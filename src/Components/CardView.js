import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardView=({experince, Job_function
  ,Job_title,Job_type,Location,Salary,Skills,editvalue,deletevalue,...props})=>{
    return (
        <Card style={{ width: '18rem' }}>
         
          <Card.Body>
            <Card.Title>{Job_title}</Card.Title>
            <Card.Text>{experince}</Card.Text>
            <Card.Text>{Job_type}</Card.Text>
            <Card.Text>{Location}</Card.Text>
            <Card.Text>{Salary}</Card.Text>
            <Card.Text>{Skills}</Card.Text>
            <Card.Text>{Job_function}</Card.Text>
            <Button variant="primary" onClick={() => { {editvalue} }}>Edit</Button>
            <Button variant="primary"  onClick={() => { {deletevalue} }}>delete</Button>
          </Card.Body>
        </Card>
      );
    
}
export default CardView