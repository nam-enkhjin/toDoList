const body = document.body;
body.style.margin = "0px";
body.style.backgroundColor = '#6574BB';

const output = document.querySelector('.output');

//larger body
output.style.width = '40%';
output.style.height = '50%';
output.style.backgroundColor = 'white';
output.style.visibility='visible';
output.style.display = 'flex';
output.style.flexDirection = 'column';
output.style.alignItems ='center';
output.style.borderRadius = '50px';
output.style.marginTop = '50px';    

//variables
const myItems = ["---"];
myItems.value = 'Create a New Design';


//add the elements
const titl = document.createElement('h1')
titl.textContent = 'To Do List';
titl.style.fontSize = '40px'
output.appendChild(titl)

const divEl = document.createElement('div');
divEl.style.borderBottom = 'solid';
divEl.style.paddingBottom = '10px';
divEl.style.paddingRight = '50px';
divEl.style.paddingLeft = '50px';
divEl.style.borderColor = 'grey';   
output.appendChild(divEl);

const inp = document.createElement('input');
inp.setAttribute('type', 'text');
inp.style.width = '200px';
inp.style.height = '30px';
inp.style.borderRadius = '7.5px';
inp.style.borderStyle = 'none';
inp.style.backgroundColor = '#E0E4FF';
inp.style.paddingLeft = '10px';
divEl.appendChild(inp);

const btn = document.createElement('button');
btn.textContent = '+';
btn.style.color = 'white';
btn.style.width = '40px';
btn.style.height = '30px';
btn.style.backgroundColor = '#BABABA';
btn.style.borderRadius = '5px';
btn.style.borderStyle = 'none';
divEl.appendChild(btn);

const unOrdList = document.createElement('ul');
unOrdList.style.listStyle = 'none';
unOrdList.style.width = '70%';
output.appendChild(unOrdList);
unOrdList.addEventListener("click", (e)=>{
        const listItem = e.target.parentElement;
        unOrdList.removeChild(listItem)
})
start();

//action

btn.addEventListener('click', addItem);

function addItem(){
    const newI = inp.value;
    myItems.push(newI);
    console.log(myItems)
    adder(newI);
}

function start(){
    myItems.forEach(ele => {
        adder(ele);
    })
}

function adder(item){
    const box = document.createElement('div');
    box.style.display = 'flex';
    box.style.alignItems = 'center';

    const liItem = document.createElement('li');
    
    const inpu =  document.createElement('input');
    inpu.setAttribute('type', 'checkbox');
    inpu.style.width = '20px';
    inpu.style.height = '20px';
    box.setAttribute('class', "list-item");


    liItem.textContent = item;
    liItem.style.borderStyle = 'none';
    liItem.style.height = '25px';
    liItem.style.width = '100%';
    liItem.style.backgroundColor = '#E0E4FF';
    liItem.style.borderRadius = '7px';
    liItem.style.padding = '5px';
    liItem.style.marginTop = '10px';
    liItem.style.textAlign = 'center';
    liItem.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
   
    box.appendChild(inpu);
    box.appendChild(liItem);
    unOrdList.appendChild(box);
    
}
