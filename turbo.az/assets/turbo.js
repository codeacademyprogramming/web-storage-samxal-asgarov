const svg=Array.from(document.querySelectorAll('#svgid'));








 
svg.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle("darkmode")
    })
})


let mashinlar=[
    {
        name:"Kia",
        model:"Cadanze",
        
        
    },
    {
        name:"hello",
        model:"goodbye",
        
        
    },
    {
        name:"Tayota",
        model:"Land-cruiser",
        
        
    }
]
for(let i=0;i<svg.length;i++){
    svg[i].addEventListener('click',function(){
       cardnumber(mashinlar[i]);
    })
}


function cardnumber(pro){
console.log("the clicked pro",pro)
    let product=localStorage.getItem('cardnumbers');
   product=parseInt(product);
   if(product){
    localStorage.setItem('cardnumbers',product+1)
   }
   else{
    localStorage.setItem('cardnumbers',1)
   }
    
}