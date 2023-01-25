const socket=io();
let nam;
do{
nam=prompt("enter name");
}while(!nam)

const form=document.getElementById('send-container');
const messagecontainer=document.querySelector('.container');
const div=document.querySelector("#btn1");
div.addEventListener('click', ()=>{
    console.log('clicked hua rey');
    const mi=document.querySelector("#messageinp");;
    console.log(nam+':'+mi.value);

    sendMessage(mi.value);

});

function sendMessage(m){
    console.log('send message clicked hua rey');

    let msg={
        'user':nam,
        'message':m

    }
    console.log("sendmessge:"+msg['user']+':'+msg['message']);

    //append
    // msg['user']=''
    appendMessage(msg,'right');
    //send to server
    socket.emit('message',msg)

}

function appendMessage(msg,lr){
    let divmain=document.createElement('div');
    divmain.classList.add("message",lr);
    let markup=`${msg['user']}:${msg['message']}`;

    divmain.innerHTML=markup;
    messagecontainer.appendChild(divmain);
}

//recieve the message
socket.on('message',(msg)=>{
    console.log(msg);
    appendMessage(msg,'left');

})
