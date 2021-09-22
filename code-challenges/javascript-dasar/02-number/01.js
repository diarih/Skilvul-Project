function rdn(min, max) {
    if(min==null && max==null)
    {
      return 0;
    }
  
    else if(max === null){
      min = 0;
      max = min
    } 
    else{
    return Math.floor(Math.random() * (max - min) + min);
  }
  }
  
  console.log(rdn(10,12))
  