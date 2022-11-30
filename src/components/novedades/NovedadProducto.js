import React from 'react';

function NovedadProducto (props) {

    return (
            <div className='cartaProducto'>
                <h3>{props.title}</h3>
                <img className='portadaProducto' src={props.portada} />
                <h3>{props.subtitle}</h3>
                <h4>${props.precio}</h4>
                <div className='descripcionProducto' dangerouslySetInnerHTML={{ __html: props.body }} />
            </div>
    );
}

export default NovedadProducto;