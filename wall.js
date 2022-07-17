console.log('Welcome to Praj world')
function updateclock(){
let newdate = new Date()
let currentHours = newdate.getHours() ;
let currentsec = newdate.getSeconds() ;
let currentMin = newdate.getMinutes() ;
currentHours =(currentHours  > 12 )? currentHours - 12 : currentHours ;
currentMin = (currentMin < 10) ? '0' : currentMin ;
currentsec = (currentsec < 10) ? '0' : currentsec
let timeOfTheDay = (currentHours < 12) ? 'AM' : 'PM' ;

let str = '';
 str += currentHours + ':' + currentMin + ':' + currentsec + ':' + timeOfTheDay ;
 let wall = document.getElementById('wall').innerHTML = str
}
window.addEventListener("load",()=>{
    updateclock();
    setInterval(updateclock,1000)
})




// let allItems = JSON.parse(localStorage.getItem("list"))
//     console.log(allItems)
//     allItems.forEach((item,idx) =>{
//         if(idx == index)
//         allItems.splice(index,1)
//     })
//     console.log(allItems)
//     localStorage.setItem("list",JSON.stringify(allItems))



