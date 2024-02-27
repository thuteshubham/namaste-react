let str= "aabcjbcc";

function uniqueElementWithIndex(str){

    let output= str.split('').reduce((acc, curr)=>{
        if(acc[curr]){
            acc[curr]+=1;
        }else{
            acc[curr]=1
        }
        return acc
    }, {})

    for( let i in str){
      let char=str[i];

      if(output[char] == 1){
        return {index:i,element:str[i]}
      }
    }
    return -1
  }
  
console.log(uniqueElementWithIndex(str));
  