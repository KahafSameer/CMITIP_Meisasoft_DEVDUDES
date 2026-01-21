const prompt = require('prompt-sync')();
console.log("****TODO APP****");

let TODO = [];
let index=1;
while(true){

    console.log("1. ADD Task");
    console.log("2. View Task");
    console.log("3. Delete Task");
    console.log("4. Update Task");
    console.log("5. Exit Task\n");

    let choice = parseInt(prompt("Enter Your Choice (1-4)"));

    if (choice==1){
        let task = prompt("Enter your task: ");
        TODO.push(task);
        console.log("b__Task added__ac\n")
    }

    else if (choice ==2){
        index =1;
        console.log("Your tasks are :")
        for (let value of TODO){
            console.log(index,".","--",value,"--");
            index++;
        }
    }

    else if (choice ==3){
        index=1;
        console.log("\nYour tasks are :")
        for (let value of TODO){
            console.log(index,".","--",value,"--");
            index++;
        }
        let del_task = parseInt(prompt("\nEnter Task Number: "));
        del_task--;
        max_lenth= TODO.length-1;
        if(del_task>max_lenth && del_task<0){
            console.log("Envalid Choice &#$&#\n");
        }
        TODO.splice(del_task,1);
        console.log("__Task Deleted__\n")
    }

    else if (choice ==4){
        index=1;
        console.log("\nYour tasks are :")
        for (let value of TODO){
            console.log(index,".","--",value,"--");
            index++;
        }
        let del_task = parseInt(prompt("\nEnter Task Number to Update: "));
        del_task--;
        max_lenth= TODO.length-1;
        if(del_task>max_lenth && del_task<0){
            console.log("Envalid Choice &#$&#\n");
        }
        let Utask = prompt("Enter your Updated task: ");
        TODO[del_task]= Utask;
        console.log("__Task Updated__\n")
    }

    else if(choice == 5){
        break;
    }


}