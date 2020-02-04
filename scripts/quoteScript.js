const quote = document.getElementById('quote');

console.log
let url = `http://quotes.rest/qod.json`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
                
        quote.innerHTML=data.contents.quotes[0].quote;
        quote.style.backgroundImage = "url('" + data.contents.quotes[0].background + "')";
        if(Math.random() > 0.5) {
            quote.style.fontFamily = "'Permanent Marker', cursive";
        }
    })
.catch(e => console.log(e));