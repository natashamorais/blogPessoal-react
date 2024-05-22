import "./NavBar.css"
function Navbar(){
    return (
        <div className="navbar-container">
            <h2 className="navbar-title"> Blog Pessoal </h2>
            <ul className="navbar-links">
               <li> Postagens  </li> 
                <li>Temas </li> 
               <li> Cadastrar Tema </li> 
                <li> Perfil </li>
               <li> Sair </li> 
            </ul>

        </div>

    );
};

export default Navbar;