var findMinMax=(numArray)=>{
	var max = numArray[0];
	var min = numArray[0];	
	for(var i = 1; i < numArray.length;i++){
		if(numArray[i] > max){
			max = numArray[i];		
		}
		
		if(numArray[i] < min){
			min = numArray[i];		
		}
	}
	if(min == max){
	return [min];
	}else{
	return [min, max];
	}
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = findMinMax;
}
