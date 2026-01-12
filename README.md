[index.html](https://github.com/user-attachments/files/24569761/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>قائمة المهام</h1>
        <input type="text" id="taskInput" placeholder="أضف مهمة جديدة">
         <button onclick="addTask()">أضف</button>
         <ul id="taskList"></ul>
         [style.css](https://github.com/user-attachments/files/24569765/style.css)body{
     font-family:Arial, sans-serif ;
     background-color: #f0f0f0;
     text-align: center;
     margin: 0;
     padding: 0;
}
.container{
    margin:50px auto;
    width:90%;
    max-width: 400px;
    background-color: white;
    padding:20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
input{
    padding:10px;
    width: 70%;
    margin-right: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
button{
    padding:10px 15px;
    border:none;
    background-color: #6a0dad;
    color:white;
    border-radius: 5px;
    cursor:pointer;
}
ul{
    list-style: none;
    padding:0;
    margin-top: 20px;
}
li{
    padding:10px;
    background-color: #f5f5f5;
    margin-bottom: 5px;
    border-radius: 5px;
    cursor:pointer;
}
li.completed{
    text-decoration: line-through;
    color:gray;
}

    </div>
    <script src="script.js"></script>
</body>
</html>
