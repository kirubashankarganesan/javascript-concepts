function display(coursename="java",price=1000){
    console.log("hi "+`${coursename}`+",your age is"+price);
    
}
display();
display(undefined,2000);

// hi java,your age is 1000
// hi java,your age is 2000

let stu={name:"raj",dept:"cse"};

function student(){
    console.log(stu.name);
    
}
student();