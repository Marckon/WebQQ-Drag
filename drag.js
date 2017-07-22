/**
 * Created by lcz on 2017/5/17.
 */
function  getByClass(clsname, parent) {
    var oparent=parent?document.getElementById(parent):document,
           eles=[];
           for(var i=0;i<oparent.childNodes.length;i++){
               if(oparent.childNodes[i].className==clsname){
                   eles.push(oparent.childNodes[i]);
               }
    }
    return eles;
}

window.onload=drag;

function drag() {
    //drag
    var odrag=getByClass("login_logo_webqq","loginPanel")[0];
    odrag.onmousedown=fndown;
    //close
    var cloicon=document.getElementById("ui_boxyClose"),
           panel=document.getElementById("loginPanel");
    cloicon.onclick=function () { panel.style.display="none"; }
    //show state panel
    var oTrigger=document.getElementById("loginState");
    oPanel=document.getElementById("loginStatePanel");
    oTrigger.onclick=function(e){
        e=event||window.event;
        //判断是否存在函数，不能加括号
        if(e.stopPropagation){
            e.stopPropagation();
        }else {
            e.cancelBubble=true;
        }
        oPanel.style.display="block";
    }
    document.onclick=function () { oPanel.style.display="none"; }
    //choose a state
    var stateitem=getByClass("statePanel_li","loginStatePanel");
    for(var i=0;i<stateitem.length;i++){
        stateitem[i].onmouseover=function () {
            this.style.backgroundColor="#567";
        }
        stateitem[i].onmouseout=function () {
            this.style.backgroundColor="#FFF";
        }
        stateitem[i].onclick=function (e) {
            e=event||window.event;
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelable=true;
            }
           loginstateshow= document.getElementById("loginStateShow");
            loginstateshow.className="login-state-show "+this.id;
            oPanel.style.display="none";
            document.getElementById("login2qq_state_txt").innerHTML=getByClass("stateSelect_text",this.id)[0].innerHTML;
        }
    }
}

/*function fndown(event) {
    var event=event||window.event;
    var odrag=document.getElementById("loginPanel");
    var spanX=event.clientX-odrag.offsetLeft;
    var spanY=event.clientY-odrag.offsetTop;
    document.onmousemove=function (e,odrag) {
        e=event||window.event;
        odrag=document.getElementById("loginPanel");
        odrag.style.left=e.clientX-spanX+"px";
        odrag.style.top=e.clientY-spanY+"px";
        document.title=e.clientY;
    }
}*/

function fndown(event) {
    event=event||window.event;
    odrag=document.getElementById("loginPanel");
    var x=event.clientX;
    var y=event.clientY;
    spanX=x-odrag.offsetLeft;
    spanY=y-odrag.offsetTop;
    document.onmousemove= function(event){
        event=event||window.event;
        fnMove(event,spanX,spanY)
    }
    document.onmouseup=function () {
    document.onmousemove=null;
    document.onmouseup=null;
}
}

function fnMove(event,x,y) {
    odrag=document.getElementById("loginPanel");
    document.title=document.documentElement.clientHeight;
    odrag.style.left=event.clientX-x+"px";
    odrag.style.top=event.clientY-y+"px";
    winW=document.body.clientWidth;
    winH=document.body.clientWidth;
    if(odrag.style.left<=0+"px"){
        odrag.style.left=0+"px";
    }
    else if(event.clientX-x>=document.body.offsetWidth-odrag.offsetWidth){
        odrag.style.left=document.documentElement.clientWidth-odrag.offsetWidth-5+"px";
    }
    if(odrag.style.top<=0+"px"){
        odrag.style.top=0+"px";
    }
    else if(event.clientY-y>=document.documentElement.clientHeight-odrag.offsetHeight){
        odrag.style.top=document.documentElement.clientHeight-odrag.offsetHeight+"px";
    }
}

function showPanel() {

}




