let isDarkMode= window.matchMedia('(prefers-color-scheme: dark)').matches;
if(isDarkMode){
  console.log('Dark mode encendido');
  ToggleDarkMode();
} else {      
  console.log('Dark mode apagado');        
}
function ToggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark");  
}
