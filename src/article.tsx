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
const produits= [
    {title: 'chou', id:1},
    {title: 'ail', id:2},
    {title: 'pomme', id:3}
]
const listefruits = produits.map(produit=>
    <li key={produit.id}>
        {produit.title}
    </li>
)
function Apps(){
    return(
        <>
            <Article/>
            <Profil/>
            <ul>{listefruits}</ul>
        </>
    )
}

export default Apps