const ins = document.querySelector("#in")
const out = document.querySelector("#out")
const msg = document.querySelector("#msgs")

let strPad = (len,text,sign="0")=>{
    return sign.repeat(8-len)+""+text;
}
let detect = (e)=>{
    let val = e.target.value;
    let oct = val.split(".");
    if(oct[0].length+oct[1].length+oct[2].length+oct[3].length !==32){
        dec2bin(val);
    }else{
        bin2dec(val)
    }
}
let setMsg = (type,text)=>{
    if(type=="clear")
    msg.innerHTML="";
    if(type=="info")
    msg.innerHTML = '<p>'+text+'</p>';
    if(type=="error")
    msg.innerHTML = '<p style="color: red;">'+text+'</p>'
}
let dec2bin = (ip)=>{
    let binOct ="";
    let oct = ip.split(".");
    let oLen = oct.length;
    if(oLen<4)
    setMsg('error','Podano tylko'+oLen+'oktety!');
    else
    setMsg('clear');
    for(i=0; i<oLen; i++){
        var digit = parseInt(oct[i]);
        binOct+= (binOct==""?"":".");
        var bin = (digit >>> 0).toString(2);
        var bLen = bin.length;
        binOct+= (bLen<8) ? strPad(bLen,bin):bin;
    }
}
let bin2dec = (bin) =>{
    let dec = "";
    let oct = bin.split(".");
    for(i=0; i<oct.length; i++){
        dec+= (dec===""?"":".");
        dec+= parseInt(oct[i],2);
    }
    out.textContent = dec;
}

ins.addEventListener('focusout',detect,false);

