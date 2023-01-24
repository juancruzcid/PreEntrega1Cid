import React from 'react';
import Categorias from './Categorias/Categorias';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">ProShop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                        <li class="nav-item dropdown">
                            <Categorias/>
                        </li>
                    </ul>
                    
                </div>
                
                <CartWidget cantCarrito={10}/>
            </div>
            
        </nav>
        
        </>
    );
}

export default Navbar;
