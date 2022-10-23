// Which one of the following is not a prime number?
a =	31
b =	61
d =	71
c =	91
// Answer: Option D

const Prime = (n) => {
    let Boolean = false;
    for (let i = 2; i <= n/2; i++) {
      if (n % i == 0) {
        Boolean = true;
      }
    }
    Boolean == true
      ? console.log(n + " is Not Prime")
      : console.log(n + " is prime");
  };
  Prime(a);
  Prime(b);
  Prime(c);
  Prime(d)
  