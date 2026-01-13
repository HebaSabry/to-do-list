
 
 
 function createTask(taskText)
 {const li =document.createElement('li')
 li.textContent =taskText;

 li.onclick =function(){
     li.classList.toggle('completed');
 };
 document.getElementById('taskList').appendChild(li);
}
  
 




function addTask(){
    const input =document.getElementById('taskInput');
  const taskText =input.value.trim();
 if(taskText ==='')return
 createTask(taskText);
 const tasks =JSON.parse(localStorage.getItem('tasks')) ||[];
 tasks.push(taskText);
 localStorage.setItem('tasks',JSON.stringify(tasks));
 input.value ='';
}
window.onload =function(){
    const savedTasks =JSON.parse(localStorage.getItem('tasks')) ||[];
    savedTasks.forEach(taskText =>createTask(taskText));
}
 
