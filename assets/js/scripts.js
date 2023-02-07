

// Create ChartJS
const chart = new Chart(document.getElementById("chart").getContext('2d'), {
   type: 'line',
   data: {
      labels: ['Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [
         {
            label: 'BTC',
            data: [29374,33537,49631,59095,87828,38684,38527,39974,48847,61007,48116,48847],
            borderColor: 'red',
            borderWidth: 2
         },
         {
            label: 'ETH',
            data: [31500,41000,88800,26000,46000,32698,5000,6000,3000,18656,24382,36834],
            borderColor: 'blue',
            borderWidth: 2
         }
      ]
   },
   options: {
      responsive: true
   }
})

// Toggle Button Sidebar
const btnMenu = document.querySelector("#btn-menu"),
      sidebar = document.querySelector("aside"),
      btnClose = document.querySelector("#btn-close");
btnMenu.addEventListener("click", () =>{
   sidebar.style.display = 'block';
})

btnClose.addEventListener("click", ()=>{
   sidebar.style.display = 'none';
})


// Toggle Button Theme
const btnTheme = document.querySelector(".btn-theme"),
      body = document.querySelector("body");
let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
   body.classList.toggle("dark");
}else{
   body.classList.toggle("light");

}
btnTheme.addEventListener("click", ()=>{
   body.classList.toggle("dark");
   btnTheme.querySelector('span:last-child').classList.toggle("active");
   btnTheme.querySelector('span:first-child').classList.toggle("active");
   if(body.classList.contains("dark")){
      localStorage.setItem("mode", "dark");
   }else{
      localStorage.setItem("mode", "light");
   }
})














