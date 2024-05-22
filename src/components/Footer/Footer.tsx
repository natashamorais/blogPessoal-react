import "./Footer.css"
function Footer(){
    return(
        <div className="footer-container">
            <p className="footer-text">  Blog Pessoal Generation | Copyright : 2024 </p>
            <p className="footer-socials--text"> Acesse nossa redes sociais </p>
            <div className="footer-socials--icons"> 
            <img src="https://img.icons8.com/?size=100&id=447&format=png&color=FFFFFF" alt="icone linkedin"/>
            <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" alt="icone instagram"/>
            <img src="https://img.icons8.com/?size=100&id=435&format=png&color=FFFFFF" alt="icone facebook"/>

             </div>
        </div>
    )
}

export default Footer;