module.exports = function check(str, bracketsConfig) {
  // your solution
    let array =[];
    if(str.length%2!=0) return false;

    for (let i = 0; i < bracketsConfig.length ; i++) {
        array.push(bracketsConfig[i][0]+bracketsConfig[i][1]);
    }

    for (let i = 0; i < array.length+1; i++) {
        for (let j = 0; j < array.length; j++) {
           while(str.includes(array[j])){
               str=str.slice(0,str.indexOf(array[j])) +
                   str.slice(str.indexOf(array[j])+2);
           }
        }
    }

    if (str.length > 0){
        return false;
    }
    else return true;
}
