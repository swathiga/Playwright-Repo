function reverse(str:string):String
{
   let result = ''
   let sl=str.length
   for(let i=sl-1;i>=0;i--)
   {
     result += str[i]
   }
   return result
}

console.log(reverse('cognizant'));

