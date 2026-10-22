
/* function sort<T>(data:T[]){
     let aftersort = new Array()
    for(let i=0;i<=data.length;i++)
    {
     for(let j=i+1;j<=data.length;j++)
     {
        if(data[i]<data[j])
        {
          
        }
     }
    }
    console.log(aftersort)
}

const input = ['swathi','midhun','devi','appu','ammu']
sort(input) */

const input1 = [50,60,30,80,100]
console.log(input1.sort((a,b)=>b-a));

const input2 = ['swathi','devi','midhun','appu','ammu']
let aftersort = input2.sort()
console.log(aftersort);


