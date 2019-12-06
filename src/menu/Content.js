import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const Content = () =>{



    return(
        <div style={{marginTop:'25vh'}}>
            <Container>
                <Row className='py-5 my-3'>
                    <Col xs={7} style={{color:'white'}}><h1>RECEIVE GREAT FOOD AND HIGH QUALITY SERVICE</h1></Col>   
                </Row>
                <Row>
                    <Link to='/order'><Col xs={4}><Button variant="danger" style={{width:'200px'}}>Order Now</Button></Col></Link>
                </Row>
            </Container>        
        </div>
    )
}

export default Content;