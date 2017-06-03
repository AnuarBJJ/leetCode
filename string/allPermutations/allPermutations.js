

let wrapper = function(s){
  const result = [];


  let Permutataions = function(soFar, rest){
    console.log(soFar)
    if(rest === ''){
      result.push(soFar);
    }
    for(let i=0; i<rest.length; i++){
      let current = soFar + rest.charAt(i);
      let remaining = rest.substring(0,i) + rest.substring(i+1);

      console.log(current, remaining);

      Permutataions(current, remaining);
    }
  }

  Permutataions("", s);

  return result;
};
