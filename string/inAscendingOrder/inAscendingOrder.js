const isInAscending = function(s){
  if ( s.length <= 1 ){
    return s.length;
  }

  let runner = 1;
  const length = s.length;

  while( runner <  length){
    if( s.charCodeAt(runner) < s.charCodeAt(runner-1) ){
      return false;
    }
    runner ++;
  }
  return true;
}
