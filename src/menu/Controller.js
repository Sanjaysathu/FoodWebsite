import React from 'react';


const Controller = ({onclick}) =>{

    const styles={
        width:'200px',
        outline:'none',
        margin:'0px',
        border:'0px',
        background:'orange',
        color:'white',
        padding:'10px 0px',
        borderRadius:'20px'
    }


    return(
        <div>
        <div style={{height:'35vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <button style={styles} onClick={onclick} id="add">Add to Cart  >></button>
        </div>
        <div style={{height:'35vh',display:'flex',justifyContent:'center',alignItems:'start'}}>
            <button style={styles} onClick={onclick} id="del">{'<<  Remove from Cart'}</button>
        </div>     
        </div>
    )
}

export default Controller;