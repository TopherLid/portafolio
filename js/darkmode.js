let isDarkMode= window.matchMedia('(prefers-color-scheme: dark)').matches;
if(isDarkMode){
  ToggleDarkMode();
} 
function ToggleDarkMode() {
  var element = document.body;
  element.classList.toggle('dark');  
}
