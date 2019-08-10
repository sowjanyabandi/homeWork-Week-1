// Write your JS here
//console.log('object')
const hero = { name : 'Captain America',
               heroic: true,
               inventory : [],
               health: 10,
               weapon :{ type:'gun',
                         damage:2
                        }
            };

                             
             
            const imgInn = document.getElementById('inn');         
           
function rest(hero)
{
    
     hero.health =10;  

        if(hero.health ==10)
        {
         alert('health is already 10') ;
         }
        //return 'health is already 10';
    return hero;
 }     
   

    imgInn.onclick = function()
        {
         hero.health = 10;
        }



const hero_like=
{
    name : 'superman',
    heroic: true,
    inventory : [{ type: 'dagger', damage: 2 }],
    health: 10,
    weapon :
    {   type:'gun',
        damage:3
    }
};
const weapon_like=
 { type: 'dagger', damage: 2 }

function pickUpItem(hero_like , weapon_like)
{
    hero_like.inventory.push(weapon_like)
}

const imgDagger = document.getElementById('dagger');
    //console.log(IMG)
    
   imgDagger.onclick = function(){
       pickUpItem(hero,weapon_like);
    
       }

function equipWeapon(hero_like){

    if(hero_like.inventory[0]!=undefined)
    {
    hero_like.weapon = hero_like.inventory[0];
    }

    return hero_like;
    }
    //console.log(hero_like.weapon)
    const imgbag = document.getElementById('bag')
    imgbag.onclick = function()
    {
    //     //console.log(herop)
    //const testWeapon = { type: 'test', damage: 0 }
        hero.weapon = hero.inventory[0]
     }
   // equipWeapon(testHero)
//equipWeapon(hero);
// function displayHeroDetails(hero){
//     console.log(`${hero.name}`)
//    // document.getElementById("Name").innerText = hero.name
//     document.getElementById("Health").innerText = hero.health
//     document.getElementById("weaponType").innerText = hero.weapon.type
//     document.getElementById("weapondamage").innerText = hero.weapon.damage

// }
function displaystatus(herodetails){
    const details =`
                    Name : ${herodetails.name}
                    Health : ${herodetails.health}
                    WeaponType : ${herodetails.weapon.type}
                    WeaponDamage : ${herodetails.weapon.damage}`
                    
document.write(details)
    //console.log(details)
}
function submitComment()
{
    const h3 = document.createElement('h3'); 
    const inputField = document.getElementById('name')
   let name = inputField.value;
   hero.name = name
   comment.appendChild(h3)
   h3.innerHTML = `${name} - is your hero`
}
console.log(hero.name)
// function updateHeroName(rename){
//     ()
// }
// document.write(hero.name)
displaystatus(hero)

