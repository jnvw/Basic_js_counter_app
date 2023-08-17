let cut=document.getElementById("count")
let ct=0
function increment(){
    ct=ct+1;
    if(ct<0){
        less()
    }
    cut.innerHTML=ct

}
function decrement(){
    ct=ct-1;
    if(ct<0){
        less()
    }
    cut.innerHTML=ct
}
function save(){
    console.log(ct)
}
function less(){
    alert("negative value")
}


