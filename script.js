document.getElementById('add-btn').addEventListener('click',()=>{
    const taskAdder = document.getElementById("task-adder");
    const ol = document.getElementById('task-holder');
    const div2 = document.getElementById('div2');
    const task = taskAdder.value;
    console.log(task);
    if(task.trim()===""){
        taskAdder.value="";
        taskAdder.placeholder="Cant be empty";
        
        
    }else{
        const d = document.createElement("div")
        var x = document.createElement("LI");
        const f = document.createElement("button");
        f.textContent="Delete";
        var t = document.createTextNode(task);
        d.appendChild(x);
        x.appendChild(t);
        x.appendChild(f);
        ol.append(d);
        taskAdder.value="";
        taskAdder.placeholder="Enter your task here";

        f.addEventListener('click',()=>{
            ol.removeChild(d);
        })
    }
})