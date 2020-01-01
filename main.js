let memesURL = "https://api.imgflip.com/get_memes";
let memesData = {};
function getmemes(){
    axios.get(memesURL).then(function(result){
    memesData = result.data
    memesData.data.memes.forEach(element => {

        document.getElementById("memesDiv").innerHTML += `<h3> ${element.name} </h3> <img src="${element.url}" width = ${element.width} height=${element.height}/>`  
 
    })
})
}
getmemes();