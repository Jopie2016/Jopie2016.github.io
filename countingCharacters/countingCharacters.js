function countingCharacters(stringToCount){
    console.log(stringToCount + "has " + stringToCount.length + "characters");
}

function countingCharacters2(stringToCount, characterToFind){
    let characterCount = 0;
    for(let characterPostion = 0; characterPostion < stringToCount.length; characterPostion++){
        if(stringToCount[characterPostion] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
}

function countingCharacters3(str, search){
    let count = 0;     
    let numChars = search.length; 
    let lastIndex = str.length - numChars;     
    
    
    for (let index = 0; index <= lastIndex; index++){       
        let current = str.substring(index, index + numChars);         
    if (current == search){                         
            count++;         
        }     
    }
    return count;
}