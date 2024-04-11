let DIOv=0;
let DIOa=0.7;
let DIOx1=0;
let DIOx2=0;
let dio1=document.getElementById("dio1");
let dio2=document.getElementById("dio2");
function dio(){
	if (DIOa<=-0.7) {
		return 0;
	}
	DIOx1-=DIOv;
	DIOx2+=DIOv;
    dio1.style.transform="translateX("+DIOx1+"px) translateY("+DIOx1+"px)";
    dio2.style.transform="translateX("+DIOx2+"px) translateY("+DIOx2+"px)";
	DIOv+=DIOa;
	DIOa-=0.1;
    setTimeout(dio, 20);
}
let kars=document.getElementById("kars");
let Karsv=3;
let Karsspin=2;
let Karsx=0;
let Karsdeg=0;
let karsopacity=1;
let karsopacityv=0.015;
function kaars(){
	if (Karsx>=200) {
		return 0;
	}
	Karsx+=Karsv;
	Karsdeg+=Karsspin;
	karsopacity-=karsopacityv;
	kars.style.transform="translateX("+Karsx+"px) translateY("+Karsx*-1.5+"px) rotate("+Karsdeg+"deg)";
	kars.style.opacity=karsopacity;
    setTimeout(kaars, 20);
}
let kira=document.getElementById("kira");
let kiraheight=201;
let kirahere=0;
let kiraherex=0;
let kiradeg=0;
let kiraspin=2.25;
let kirav=2.5;
let kiraheightv=5;
let ambulance=document.getElementById("ambulance");
let ambulancev=3;
let ambulancex=0;
function kiraa(){
	if (ambulancex<=-30) {
		kiraaa();
	}
	if (ambulancex<=-180) {
		return 0;
	}
	ambulancex-=ambulancev;
	ambulance.style.transform="translateX("+ambulancex+"px)";
    setTimeout(kiraa, 20);
}
function kiraaa(){
	if (kiraheight<=0) {
		return 0;
	}
	kirahere+=kirav;
	kiraherex-=kirav*0.75;
	kiradeg+=kiraspin;
	kiraheight-=kiraheightv;
	kira.style.width="157px";
	kira.style.transform="translateY("+kirahere+"px) translateX("+kiraherex+"px) skew("+kiradeg+"deg)";
	kira.style.height=kiraheight+"px";
}
let valentine=document.getElementById("valentine");
let valentinedeg=0;
let valentinespin=0;
let valentinea=2;
function valentinee(){
	if (valentinespin==360) {
		valentinespin=0;
	}
	valentinedeg+=valentinespin;
	valentinespin+=valentinea;
	valentine.style.transform="rotate("+valentinedeg+"deg)";
    setTimeout(valentinee, 20);
}
let o2pucci=0;
let o2=document.getElementById("o2");
let o2here=0;
let o2v=5;
function o22(){
	if (o2here<=-100) {
		o222();
		o2pucci+=1;
		if (o2pucci==3) {
			puccii();
		}
		return 0;
	}
	o2here-=o2v;
	o2.style.transform="translateX("+o2here+"px)";
    setTimeout(o22, 20);
}
function o222(){
	if (o2here>=0) {
		if (o2pucci==3) {
			return 0;
		}
		o22();
		return 0;
	}
	o2here+=o2v;
	o2.style.transform="translateX("+o2here+"px)";
    setTimeout(o222, 20);
}
let pucci=document.getElementById("pucci");
let puccideg=0;
let puccispin=2.5;
let puccihere=0;
let pucciv=1;
function puccii(){
	if (puccideg==-90) {
		return 0;
	}
	puccihere+=pucciv;
	puccideg-=puccispin;
	pucci.style.transform="rotate("+puccideg+"deg)";
	setTimeout(puccii, 20);
}
let toru1=document.getElementById("toru1");
let toru2=document.getElementById("toru2");
let toru3=document.getElementById("toru3");
let toru2opacity=0;
let toru1opacity=1;
let toru3opacity=0;
let toruopacityv=0.01;
function toru12(){
	if (toru1opacity<=0) {
		toru23();
		return 0;
	}
	toru2opacity+=toruopacityv;
	toru1opacity-=toruopacityv;
	toru1.style.opacity=toru1opacity;
	toru2.style.opacity=toru2opacity;
	setTimeout(toru12, 20);
}
function toru23(){
	if (toru2opacity<=0) {
		return 0;
	}
	toru3opacity+=toruopacityv;
	toru2opacity-=toruopacityv;
	toru2.style.opacity=toru2opacity;
	toru3.style.opacity=toru3opacity;
	setTimeout(toru23, 20);
}