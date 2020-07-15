const btnClick=document.getElementById('btnClick');

//add EventListener
btnClick.addEventListener('click', () => {
    searchAuthor();
})


const searchAuthor=async RandomAuthor => {
    const fetchData=await fetch('./Author.json');
    const states=await fetchData.json();
    const AnyOne=parseInt(Math.random()*states.length)
    //console.log(states[AnyOne])
    document.getElementById('quote').innerHTML=states[AnyOne].quoteText;
    document.getElementById('authorName').innerHTML=states[AnyOne].quoteAuthor;
}
