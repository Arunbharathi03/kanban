document.getElementById('add').addEventListener('click',function() {
    let cardInfo = document.getElementById('inputarea').value;
    if (cardInfo !=0) {addTask(cardInfo)};
    document.getElementById('inputarea').value = '';
    })


function addTask(card) {
    
    let task = document.createElement('div');
    task.classList.add('tasks-added');
    task.setAttribute('draggable' , true);

    let cardDes = document.createElement('div');
    cardDes.classList.add('card-content');
    cardDes.innerText = card;
    
    let remove = document.createElement('div');
    remove.classList.add('remove');
    remove.innerHTML= 'X';
    remove.addEventListener('click' , trash);

    task.appendChild(cardDes);
    task.appendChild(remove);

    let taskList = document.getElementById('tasks');
    taskList.prepend(task);
    console.log(taskList);
 
}
//for deleting cards 
const trash = (event) => {
    let task = event.target.parentNode;
    task.remove();  
};

//drag and drop
let card ;

const dragStart = (event) =>{
    card = event.target;
    console.log('hi', event);
    setTimeout(()=> { card.classList.add('invisible')} , 0);

};

const dragEnd = (event) => {
    console.log('end');
    event.target.className = 'tasks-added';
    
};

const dragEnter = (event) => {
    event.preventDefault();
    console.log('enter');
};
const dragOver = (event) => {
    event.preventDefault();
    console.log('over');
};
const dragLeave = () => {
    console.log('leave');
};
const dragDrop = (event) => {
    console.log('drop',card);
    card.classList.remove('invisible');
    event.target.append(card);
    

};

const boards = document.querySelectorAll('.board');
Array.from(boards).forEach(item =>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);

})

