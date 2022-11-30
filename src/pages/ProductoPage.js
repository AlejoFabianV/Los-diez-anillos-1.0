import React from 'react';
import { useParams } from 'react-router-dom'
import '../styles/components/pages/ProductoPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadesItem from "../components/novedades/NovedadProducto";

const ProductoPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('')
    const [title, setTitle] = useState('');
    const [subtitle, setSubtile] = useState('');
    const [precio, setPrecio] = useState('');
    const [portada, setPortada] = useState('');
    const [body, setBody] = useState('');
    const { idProducto } = useParams();
    const {tituloProducto} = useParams()
    const { subtituloProducto } = useParams()

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/api/producto/${tituloProducto}/${subtituloProducto}/${idProducto}`);
            setId(response.data.id);
            setTitle(response.data.titulo);
            setSubtile(response.data.subtitulo);
            setPrecio(response.data.precio);
            setPortada(response.data.portada);
            console.log(response.data);
            setBody(response.data.descripcion);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <main className="holder">
            <section>
                <div>
                    {
                        loading ? (
                            <p>cargando...</p>
                        ) :
                        ((<NovedadesItem
                            key={id}
                            title={title}
                            subtitle={subtitle} 
                            precio={precio}
                            portada={portada} 
                            body={body} />)
                        )
                    }
                </div>
                   
            </section>
        </main>
    );
}
export default ProductoPage;