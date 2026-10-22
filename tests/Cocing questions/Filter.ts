
const data1: string[] = ['apple','orange','grape','watermelon']
const substring = data1.filter(data2 => data2.includes('o'))
console.log(substring);

interface details{
  Name : string
  Roll_no: number
}
const students:details[] = [
    {Name: "Swathi", Roll_no:10 },
    {Name:"Midhun",Roll_no:30},
    {Name:"Sathy",Roll_no:20}
]

const dance_team = students.filter(dance => dance.Roll_no==20)
console.log(dance_team);

