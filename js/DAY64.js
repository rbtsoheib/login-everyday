const M =
  "I am listening to metallica - Enter Sandman while writing this , feels awsome ";

console.log(M);

var m = M.length;

console.log("The length of the string is : " + m);

const N = M.toUpperCase();

console.log(N);

const O =
  " now I am listening to Ozzy Osbourne - no more tears, what a song man ";

console.log(O);

const P = N.concat(O);

console.log(P);

const Q = P.replace("OZZY", "Ozzy");

console.log(Q);

const R = Q.slice(0, 50);

console.log(R);

const S = Q.split(" ");

console.log(S);
