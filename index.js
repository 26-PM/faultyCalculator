a=prompt("Enter first number:")
b=prompt("Enter second number:")
c=prompt("Enter operation:")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

random=Math.random()

if (random>0.1){
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}