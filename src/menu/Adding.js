import React,{useState} from 'react';
import burger from './burger.png';
import pizza from './pizza.jpg';
import fries from './fries.jpg';
import pasta from './pasta.jpg';
import sandwich from './sandwich.jpg';
import {Container,Row,Col} from 'react-bootstrap';
import Deleting from './Deleting';
import Controller from './Controller';


const Adding = () =>{

    const [query,setQuery] = useState('');
    const [delval,setDelval] = useState('');
    const [price,setPrice] = useState(0);
    const [bcost,setBcost] = useState(0);
    const [pi,setPi] = useState(0);
    const [pa,setPa] = useState(0);
    const [fr,setFr] = useState(0);
    const [sa,setSa] = useState(0);


    var onselect = (name) => { 
        document.getElementById('burger').style.background = 'white';
        document.getElementById('pizza').style.background = 'white';
        document.getElementById('pasta').style.background = 'white';
        document.getElementById('sandwich').style.background = 'white';
        document.getElementById('fries').style.background = 'white';
        document.getElementById(name).style.background = 'orange';
        setQuery(name);
    }

    onclick = (e) =>{
        if(query !== ''){
            if(e.target.id === 'add')
            {
                document.getElementById(query).style.background='white';
                document.getElementById(query+'1').style.display='block';
                
                    switch (query) {
                        case 'burger':
                            setPrice(price+80);
                            setBcost(bcost+1);
                            break;
                        case 'pizza':
                            let b = price;
                            setPrice(b+130);
                            setPi(pi+1);
                            break;
                        case 'pasta':
                            setPrice(price+100);
                            setPa(pa+1)
                            break;
                        case 'fries':
                            setPrice(price+50);
                            setFr(fr+1);
                            break;
                        case 'sandwich':
                            setPrice(price+60);
                            setSa(sa+1);
                            break;
                        
                    }
                    setQuery('');
                }
            }
            
            if(delval !== ''){
            if(e.target.id === 'del'){
                document.getElementById(delval).style.background='white';
                document.getElementById(delval).style.display='none';
                
                switch (delval) {
                    case 'burger1':
                        setPrice(price-80*bcost);
                        setBcost(0);
                        break;
                    case 'pizza1':
                        setPrice(price-130*pi);
                        setPi(0);
                        break;
                    case 'pasta1':
                        setPrice(price-100*pa);
                        setPa(0);
                        break;
                    case 'fries1':
                        setPrice(price-50*fr);
                        setFr(0);
                        break;
                    case 'sandwich1':
                        setPrice(price-60*sa);
                        setSa(0);
                        break;
                
                }
                setDelval('');
                          
            }

            }   

    }

    var onselectlist = (e) =>{
        setDelval(e);
        document.getElementById('burger1').style.background = 'white';
        document.getElementById('pizza1').style.background = 'white';
        document.getElementById('pasta1').style.background = 'white';
        document.getElementById('sandwich1').style.background = 'white';
        document.getElementById('fries1').style.background = 'white';
        document.getElementById(e).style.background = 'orange';
    }

    return(
        <Container className='mt-5'>
            <Row>
                <Col md>
                        <div style={{backgroundColor:'white',height:'70vh',overflowY:'scroll' }} id='main'>
                                <div style={{textAlign:'center'}}>
                                    <h4>Items Available</h4>
                                </div>
                            <Container id='burger'> 
                                    <Row onClick={() => onselect('burger')} className="align-items-center">
                                        <Col sm={4}><img src={burger} style={{height:'75px',width:'100%'}} alt=""/></Col>
                                        <Col sm>Chicken Burger</Col>
                                        <Col sm={2}>Rs.80</Col>
                                    </Row>
                            </Container>
                            <Container id='pizza'> 
                                    <Row onClick={() => onselect('pizza')} className="align-items-center">
                                        <Col sm={4}><img src={pizza} style={{height:'80px',width:'100%'}} alt=""/></Col>
                                        <Col sm>Chicken Pizza</Col>
                                        <Col sm={2}>Rs.130</Col>
                                    </Row>
                            </Container>
                            <Container id='pasta'> 
                                    <Row onClick={() => onselect('pasta')} className="align-items-center">
                                        <Col sm={4}><img src={pasta} style={{height:'80px',width:'100%'}} alt=""/></Col>
                                        <Col sm>Veg Pasta</Col>
                                        <Col sm={2}>Rs.100</Col>
                                    </Row>
                            </Container>
                            <Container id='sandwich'> 
                                    <Row onClick={() => onselect('sandwich')} className="align-items-center"> 
                                        <Col sm={4}><img src={sandwich} style={{height:'80px',width:'100%'}} alt=""/></Col>
                                        <Col sm>Veg Sandwich</Col>
                                        <Col sm={2}>Rs.60</Col>
                                    </Row>
                            </Container>
                            <Container id='fries'> 
                                    <Row onClick={() => onselect('fries')} className="align-items-center">
                                        <Col sm={4}><img src={fries} style={{height:'80px',width:'100%'}} alt=""/></Col>
                                        <Col sm>French Fries</Col>
                                        <Col sm={2}>Rs.50</Col>
                                    </Row>
                            </Container>
                        </div> 
                </Col>
                <Col md={3}><Controller onclick={onclick}/></Col>
                <Col md> <Deleting onselectlist={onselectlist} price={price} bc={bcost} pi={pi} pa={pa} fr={fr} sa={sa}/></Col>
            </Row>
        </Container>
        
    )
}

export default Adding;