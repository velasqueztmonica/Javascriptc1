function checkTitle(title) {
	let arr = title.split(' ').every(isUpperCase);
    return arr;
}
const isUpperCase = function(str){
    let arr = str.split('')
    if(arr[0] === arr[0].toUpperCase()){
        return true;
    } else {
        return false;
    }
}