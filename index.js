let str1=prompt("enter a name :")
index=0
rows=4
for(i=1;i<=rows;i++){
    res=""
   
    for(j=1;j<=i;j++){  
        if(str1[index]==undefined){
            res=res+"* "
//         }
        else{
            res=res+str1[index]+" "
              index++;
        }
   
    }
    console.log(res)

h 
e l 
l o * 
* * * * 


let rows=+prompt("enter of rows :")
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows-i+1;j++){
        if(i==j||i+j==rows)
        res=res+" "
    }
    console.log(res)
}


let rows=+prompt("enter number of rows :")
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(i==j||j==rows-i+1){
        res=res+j+" "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}

1       5 
  2   4   
    3     
  2   4   
1       5 



let rows=+prompt("enter number of rows :")
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(i==j||i+j==rows+1){
        res=res+j+" "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}


1       5 
  2   4   
    3     
  2   4   
1       5 



let num=71

if(num>1){
    c=0
    for(i=2;i<num;i++){
        if(num%i==0){
            // console.log("nonprime number",i)
            c++
            break;
        }
       
  
    if(c==0){
        console.log("prime")
    }
}
    
}


function multi(a){
    let multi=1
     for(i of a){
      if(i%2==0){
          multi=multi*i
      }   
     }
     console.log(multi)
     
 }
 const arr1=[1,2,3,4,5,6]
 multi(arr1)


 let arr1=[1,2,3,4,5,6]
multi=1
for(i of arr1){
    if(i%2==0){
       multi=multi*i 
    }
}
console.log(multi)

ca=900
b=700
c=600
result=(a==b && b==c)?"all are equal":(a>b && a>c)?"a is bigger":(b>c)?"b is bigger":"c is bigger";
console.log(result)


function multiple(a){
    let multi=1
    for(i of a){
        if(i%2==1){
            multi*=i
        }
    }
    return multi;
 
  
}
const arr1=[1,2,3,4,5,6]
let result=multiple(arr1)
   console.log(result)


   let arr1=[[1,8,5],[6,9,8,7],[5,9,1,9]]
let result=arr1.map(c=>c.sort((a,b)=>a-b))
console.log(result)