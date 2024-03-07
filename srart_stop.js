let id=0
function start(){
    id=setInterval(()=>{
        let div = document.createElement('div');
        document.body.appendChild(div);
    },1000);
}
function stop(){
    clearInterval(id);
}