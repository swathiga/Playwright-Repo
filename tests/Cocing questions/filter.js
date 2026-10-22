var data1 = ['apple', 'orange', 'grape', 'watermelon'];
var substring = data1.filter(function (data2) { return data2.includes('o'); });
console.log(substring);
var students = [
    { Name: "Swathi", Roll_no: 10 },
    { Name: "Midhun", Roll_no: 30 },
    { Name: "Sathy", Roll_no: 20 }
];
var dance_team = students.filter(function (dance) { return dance.Roll_no == 20; });
console.log(dance_team);
