import './Home.css'
function Home(){
    return(

     <>
     <div className="home-container"> 
     <div className='home-textcontainer'> 
        <h1 className="home-title"> Seja Bem Vinde! </h1>
     <p className="home-text"> Expresse aqui seus pensamentos e opiniões </p>
     <a className="home-button"> Nova Postagem</a>
     </div>
    
     
     <div className='home-imagecontainer'> 
        < img className='home-image' src='https://i.imgur.com/VpwApCU.png' alt="imagem da home"/> 
        </div>
    
     </div>
     </>
    )
}

export default Home;