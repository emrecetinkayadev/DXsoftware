// First Given List
a = [1, 2, 3, 6, 4, 8, 5, 3];
LenListGlob = a.length;
mixedVal = FindIndisAndMax(a)
MaxNumGlob = mixedVal[0];
IndexMaxNum = mixedVal[1];

console.log("First Maximum: ", MaxNumGlob);
a.push(10);
NewMax(a);
a.push(15);
NewMax(a);
a.pop();
NewMax(a);
a.pop();
NewMax(a);
a.pop();
NewMax(a);
a.pop();
NewMax(a);
a.pop();
NewMax(a);
a.push(10);
NewMax(a);

console.log(a);

function NewMax(a){
    // Push Part
    let maxNum = MaxNumGlob;
    lenNow = a.length;
    if (lenNow > LenListGlob){
        for (let i = LenListGlob; i < lenNow; i++){
            if (a[i] > maxNum){
                maxNum = a[i];
            }
        }
    }
    // Pop Part
    if (lenNow <= LenListGlob){
        if (lenNow > IndexMaxNum){
            maxNum = MaxNumGlob;
        }else{
            maxNum = Math.max(...a);
            LenListGlob = lenNow;
        }
    }
    console.log("New Maximum: ", maxNum);
}

function FindIndisAndMax(a){
    let maxNumb = -1,index = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] > maxNumb){
            maxNumb = a[i];
            index = i;
        }
    }
    return [maxNumb, index]
}