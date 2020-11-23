//11번
var line = 5;
var result = "";

for(var i=1;i<=line;i++){
  for(var j=1;j<=i;j++){
    result += "*";
  }
  result += "\n";
}

console.log(result);