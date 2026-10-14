function Article(){
    return(
        <button className="bouton">
            CONNECTER-VOUS
        </button>
    )   
}

function Profil() {
  return (
    <div>
      <h2>Mon profil</h2>
      <p>Bienvenue sur mon profil !</p>
    </div>
  )
}
function Apps(){
    return(
        <>
            <Article/>
            <Profil/>
        </>
    )
}
export default Apps