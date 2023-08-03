/* var a= 120;
/*console.log("This is the value before :" + a)
{
    var a=20
    console.log("This is after changing" + a)
}
console.log("This is the value before :" + a)
 */
/* let b=140;
console.log("This is the value:"+ b)
{
    let b = 20
    console.log("This is the value after changing" +b)
}
console.log("This is the value:"+ b)

const c = 140;
console.log("This is the value:" + c)

//IF...else
a = 0
if (a===0){
    console.log("The number is 0 and adding 1 to it to make it positive")
}
if(a >= 0){
    console.log("The number is Positive")
}
else{
    console.log("The number is Negative")
}
i=0
while(i<=a){
    console.log(i)
    i++
}
array = [10,20]//one liner function arrow op
array.forEach(element =>  console.log(element))//arrow op will fetch the elements */

const array =["ranya",23,2,10.00,Date()]
for(var ele in array){
    console.log(array[ele])
}
console.log("after change")
array.push("Sanjay")

for (var ele in array){
    console.log(array[ele])
}

console.log("After poping")
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
console.log(array)
for (var ele in array){
    console.log(array[ele])
}

if(array.length>0){
    console.log("elements are present")
    for (var ele in array){
        console.log(array[ele])

}}
else{
    console.log("No Elements")
}

array.push(1)
console.log(array)

//objects

a = {
    car:"Audi",
    model:"AB",
    airbags: 8,
    wheels: 5,
    color:"blue"
}
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car = "BMW"
console.log(a)  
a.sunroof = {isPresent: "Yes", Shape: "Rectangle"}
console.log(a.sunroof .isPresent) 
for (var ele in a)
{
    console.log(ele +":"+ a[ele])
    if(typeof a[ele]==="object")
    {
        for (var val in a[ele]){
            console.log(val +":" +a[ele][val])
        }
    }
}

