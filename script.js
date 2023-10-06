
const hentEmoji = document.getElementById("getEmojii");
function getEmojii(){
    alert('finalresult')
}
const fetchEmoji = async () => {
    const response = await fetch(`https://emojihub.yurace.pro/api/random`);
    const data = await response.json();
    console.log(data)
    let randomEmoji = document.getElementById("randomEmoji");
    let result = data.htmlCode[0]
    console.log(result)
    let finalresult = result.slice(0,-1)
    console.log(finalresult)
    randomEmoji.innerHTML = finalresult
   
}

fetchEmoji()
