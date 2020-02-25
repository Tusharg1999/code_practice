let sum=0;
for (let i = 2; i < 10; i+=2) {
  let temp = 0;
  if (isPrime(i)) {
      sum=sum+i;
  }
}
console.log(sum);

function isPrime(n){
    var prime=true;
    if (n<2) {
        return false;
    }
    else if(n===2){
        return true;
    }
    
        for(let i=3;i<=n/2;i++){
            if(n%i==0){
                prime=false;
                break;
            }
        }
    return prime;
}
