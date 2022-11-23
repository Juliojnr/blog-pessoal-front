import React from 'react';
import './Menu.css';

function Menu() {
    return (
        <div className='container'>
            <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Contato</a></li>
            </ul>
            <img src="https://i.imgur.com/PAV7zCS.jpeg" alt="Imagem Tela Inicial" />
        </div>
    )
}

export { Menu }