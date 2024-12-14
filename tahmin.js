const input=document.querySelector("#input");
const button=document.querySelector("#button");
const textsonuc=document.querySelector("#sonuc");
const yapılantahmin=document.querySelector("#yapılantahmin");
const gerceksayı=document.querySelector("#gerceksayı");

function oyun(){

var sayi=Math.round(Math.random()*100);

var tahmin=input.value;


if(sayi==tahmin){
    alert("Tebrikler! Tahmininiz doğru.")
    textsonuc.innerHTML="Doğru tahmin ! ";
    textsonuc.style.color="palevioletred";
    yapılantahmin.innerHTML="Yapılan tahmin sayısı : "+tahmin;
    gerceksayı.innerHTML="Tahmin edilen sayı : "+sayi;
    console.log("Sayımız : "+sayi);
    
}else{
    textsonuc.innerHTML="Yanlış tahmin :(  ";
    textsonuc.style.color="palevioletred";
    yapılantahmin.innerHTML="Yapılan tahmin sayısı : "+tahmin;
    gerceksayı.innerHTML="Tahmin edilen sayı : "+sayi;
    console.log("Sayımız : "+sayi +"Doğru tahmin edildi");
    

}




}

button.addEventListener("click",oyun);
