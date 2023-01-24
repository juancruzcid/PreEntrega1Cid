import React from 'react';

const Categorias = () => {
    return (                            
    <>
    <a class="nav-link dropdown-toggle show" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Categorias</a>
    <div class="dropdown-menu " data-bs-popper="static">
        <a class="dropdown-item" href="#">Palos y Sets</a>
        <a class="dropdown-item" href="#">Indumentaria</a>
        <a class="dropdown-item" href="#">Accesorios</a>

    </div>
    </>
      );
}

export default Categorias;
