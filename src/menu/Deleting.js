import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import burger from './burger.png';
import pizza from './pizza.jpg';
import fries from './fries.jpg';
import pasta from './pasta.jpg';
import sandwich from './sandwich.jpg';


const Deleting = ({onselectlist,price,bc,pi,pa,fr,sa}) =>{

    return(
        <div style={{backgroundColor:'white',height:'70vh'}}>
               <div style={{textAlign:'center',height:'10%'}}>
                    <h4>Checkout</h4>
                </div>
                <div style={{height:'80%',overflowY:'scroll'}}>
                <Container id='burger1' style={{display:'none'}}> 
                         <Row onClick={() => onselectlist('burger1')} className="align-items-center">
                             <Col sm={4}><img src={burger} style={{height:'75px',width:'100%'}} alt=""/></Col>
                              <Col sm>Chicken Burger x {bc}</Col>
                               <Col sm={2}>Rs.{80*bc}</Col>
                         </Row>
                </Container>
                <Container id='pizza1' style={{display:'none'}}> 
                        <Row onClick={() => onselectlist('pizza1')} className="align-items-center">
                                <Col sm={4}><img src={pizza} style={{height:'80px',width:'100%'}} alt=""/></Col>
                                <Col sm>Chicken Pizza x {pi}</Col>
                                <Col sm={2}>Rs.{130*pi}</Col>
                        </Row>
                </Container>
                <Container id='pasta1' style={{display:'none'}}> 
                        <Row onClick={() => onselectlist('pasta1')} className="align-items-center">
                                <Col sm={4}><img src={pasta} style={{height:'80px',width:'100%'}} alt=""/></Col>
                                <Col sm>Veg Pasta x {pa}</Col>
                                <Col sm={2}>Rs.{100*pa}</Col>
                        </Row>
                </Container>
                <Container id='sandwich1' style={{display:'none'}}> 
                         <Row onClick={() => onselectlist('sandwich1')} className="align-items-center"> 
                                <Col sm={4}><img src={sandwich} style={{height:'80px',width:'100%'}} alt=""/></Col>
                                <Col sm>Veg Sandwich x {sa}</Col>
                                <Col sm={2}>Rs.{60*sa}</Col>
                        </Row>
                </Container>
                <Container id='fries1' style={{display:'none'}}> 
                        <Row onClick={() => onselectlist('fries1')} className="align-items-center">
                                <Col sm={4}><img src={fries} style={{height:'80px',width:'100%'}} alt=""/></Col>
                                <Col sm>French Fries x {fr}</Col>
                                <Col sm={2}>Rs.{50*fr}</Col>
                        </Row>
                </Container>
                </div>
                <h4 style={{backgroundColor:'grey',height:'10%'}}>Total cost:  {price}</h4>

        </div>
    )
}

export default Deleting;