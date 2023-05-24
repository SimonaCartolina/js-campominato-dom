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

    