const words = ["ball", "shinguards", "net", "cleats", "jersey"];
//choose one of the above words randomly

function randomWord(words){
    let randomResult = words[Math.floor(Math.random()*5)].split("")
    return randomResult
    }

    
  
    //then, depending on the number of letters in the word, create a counter with that number
