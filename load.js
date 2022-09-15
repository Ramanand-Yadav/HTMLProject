window.onload = () => {
// copy below to add more pages -->
     // the page we want to use for our sidebar -->
    fetch('home.html') 
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("navbar").innerHTML = data; 
    })
 // copy end // inserts to element id="navbar" -->
}