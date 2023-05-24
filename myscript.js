const playButton=document.querySelector('button');
const gridElement= document.querySelector('div.grid');

function createElement(tagName, className){
    const cellElement=document.createElement(tagName);
    cellElement.className+= className;
    return cellElement;
};



            for(let i=0; i<100; i++){
                const actualCell=document.createElement('div', 'cell');
                actualCell.classList.toggle('cell');
                actualCell.innerHTML=
                `<p> 
                ${i+1} 
                </p>`;
                
                    gridElement.appendChild(actualCell);  

                    actualCell.addEventListener('click', function() {
                        actualCell.style.backgroundColor="red";
                    })


                };

                playButton.addEventListener('click', function(){

                    gridElement.innerHTML="";
                    console.clear();

                    for(let i=0; i<100; i++){
                        const actualCell=document.createElement('div', 'cell');
                        actualCell.classList.toggle('cell');
                        actualCell.innerHTML=
                        `<p> 
                        ${i+1} 
                        </p>`;
                        
                            gridElement.appendChild(actualCell); 
                    }
                });


function uniqueNumber(max, min, elements){
    let numberList=[];

    if((16-1)<6){
        return[];
    }

    while(numberList.length<numberList){
        const randomNumber= Math.floor(Math.random() * (16 - 1 + 1));
        if(!numberList.includes(randomNumber)){
            numberList.push(randomNumber);
        }
    }
    return numberList;
};
console.log(uniqueNumber());

for(i=0; i<16; i++){
    uniqueNumber(1, 16, 16);
};



/*In seguito l'utente clicca su una cella:
 se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
  Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
  
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

    