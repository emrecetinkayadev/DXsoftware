test = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";

var _longestStr,maxVowelStr;

_longestStr = calculateStringLength(test);
maxVowelStr = vowelConter(_longestStr);
console.log(maxVowelStr);

function calculateStringLength(str) {
    var maxSize = 0;
    var _longestStr = [];
    noSpecial = str.replace(/[^a-zA-Z ]/g, "");
    _strings = noSpecial.split(" ");
    for (let i = 0; i < _strings.length; i++) {
        var strLen = _strings[i].length;
        if (strLen < maxSize) {
            continue;
        }
        if (strLen > maxSize){        
            _longestStr = []
            maxSize = strLen;            
        }
        _longestStr.push(_strings[i])
    }
    return _longestStr
}

function vowelConter(str){
    var maxVowelStr;
    var maxVowel = 0;
    for (var i = 0; i < str.length; i++) {
        var count = 0;
        switch (str[i]) {
            case 'a','e','i','o','u':
                count++
        }
        if (count >= maxVowel){
            maxVowel = count
            maxVowelStr = str[i]
        }
    }
    return maxVowelStr
}


