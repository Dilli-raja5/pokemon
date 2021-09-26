
const pok_cards=document.querySelector('.pok_cards');
//storing a value of 50 out of 151 number of pokemon in variable and iterating it in for loop 50 times
const number_of_pok=50;

const pokemonlist= async ()=>{
    for(let i=1;i<=number_of_pok;i++)
    {
        await getpokemon(i);
    }
}
 //function for getting pokemon data
const getpokemon= async(id)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res= await fetch(url);
    const pokemon=await res.json();
    // console.log(pokemon)
    createpokemondata(pokemon);
}

function createpokemondata(pokemon){
    //creating pokemon div for elements
    const pokmonel=document.createElement('div')
    pokmonel.classList.add('pokemonlist');

    const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    //creating two div for image & text
    const pokinnerhtml=`
    </div>
    <div class="image-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${pokemon.id}.png" alt="${name} image" > 
    </div>
    <div class="info">
    <h3># ${pokemon.id.toString().padStart(3,'0')}</h3> 
    <h3 >NAME: ${name}</h3>
    <h3 >WEIGHT: ${pokemon.weight}</h3>    
    </div>  ` 

    pokmonel.innerHTML=pokinnerhtml;

    pok_cards.appendChild(pokmonel)
   
}
//get_pokmon(1)

pokemonlist();
