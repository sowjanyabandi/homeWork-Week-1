// Write your JS here
//console.log('object')
let hero = { name : 'CaptainAmerica ',
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
    
     

        if(hero.health ==10)
        {
         alert('health is already 10') ;
         }
         else{
            hero.health =10;  
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

    if(hero_like.inventory[0] !=undefined)
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
  
function displaystatus(){//
    
    let herostats = document.getElementById("herostats")
    herostats.innerText   =`
                    Name : ${hero.name}
                    Health : ${hero.health}
                    WeaponType : ${hero.weapon.type}
                    WeaponDamage : ${hero.weapon.damage}`
    
    
    
 let newheroname = document.getElementById("name").value


 hero.name = newheroname
 console.log(newheroname)
 console.log(hero.name)



}
 




