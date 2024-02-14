const btnEl = document.getElementById("btn");
const emojiNameE1 = document.getElementById("emoji-name");

const emoji = [];
async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=9727cd8f8067c590c987469d352835c92b019edc")
 
    data = await response.json()



 for (let i=0; i<1500;i++){
    emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
    });
 }
}
getEmoji();

btnEl.addEventListener("click",  ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameE1.innerText = emoji[randomNum].emojiCode;
});