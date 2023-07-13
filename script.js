let btn = document.querySelectorAll('.btn');
let image= document.querySelector('.image');
let images = ['1','2','3','4','5','6'];


// function myfun(){return new Promise((resolve,reject)=>{()=>{
    
    
  (function()
  { 
    // setTimeout(()=>{
let index=0;

    setInterval(()=>{
      index++
      console.log(index)
      if(index===images.length){
        index=0;


      }
      console.log(index)
      image.src=`${images[index]}.jpeg`

    },5000)
    





// },3000)
})();


