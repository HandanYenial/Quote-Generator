document.querySelector("#generate").addEventListener("click",() =>{
    generate();
})


generate=()=>{
    let quotes={
        "-Pythagoras" :' "Concern should drive us into action and not into a depression. No man is free who cannot control himself." ',
        "-Charles Evans Hughes" :' "When we lose the right to be different, we lose the privilege to be free." ',
        "-E. M. Forster" :'"The four characteristics of humanism are curiosity, a free mind, belief in good taste, and belief in the human race." ',
        "-Charles R. Swindoll" :'"Life is 10% what happens to you and 90% how you react to it." ',
        "- Babe Ruth": '"Every strike brings me closer to the next home run."',
        "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
        "- Earl Nightingale": '"We become what we think about."',
        
    }
    
    
let authors=Object.keys(quotes);
let author=authors[Math.floor(Math.random()*authors.length)];

let quote=quotes[author];

document.querySelector("#quote").textContent = quote;
document.querySelector("#author").textContent = author;

}
