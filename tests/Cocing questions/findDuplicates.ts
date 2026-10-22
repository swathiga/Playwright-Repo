function duplicates<T>(arr:T[])
{
    const seen = new Set()
    const dupli = new Set()

    for(let value of arr)
    {
      if(seen.has(value))
      {
        dupli.add(value)
      }
      seen.add(value)
    }
console.log('Duplicates are:',dupli)
console.log('Unique value are:',seen);
}

const data = ['swathi','midhun','devi','midhun','swathi']
duplicates(data)