//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  let array1 = [managerName, managerAge, currentTeam, trophiesWon];
  return array1;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length==0){
    return null;
  }
  else{
    return {
      defender:formation[0],
      midfield:formation[1],
      forward:formation[2],
    }
  }
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter((filter_debut)=>filter_debut.debut==year);
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter((filter_position)=>filter_position.position==position);
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let result=[];
  if(!awardName){
    return [];
  }
  players.forEach((a) => {
    a.awards.filter((b) => {
      if (b.name == awardName) result.push(a)
    })
  })
  if (!result) {
    return [];
  }
  else {
    return result;
  }
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
	let result = [];
	if (!(awardName && noOfTimes)) {
    return [];
  }
	players.forEach((a) => {
	  let count = 0;
	  a.awards.filter((b) => {
		if (b.name == awardName) {
		  count++;
		}
	  })
	  if (count >= noOfTimes) result.push(a)
	})
	if (!result) {
    return [];
  }
	else {
    return result;
  }
  }

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
	let result = [];
	if (!(awardName && country)) return []
	players.forEach((a) => {
	  if (a.country == country) {
		a.awards.filter((b) => {
		  if (b.name == awardName) {
			result.push(a);
		  }
		})
	  }
	})
	if (!result) {
    return [];
  }
	else {
    return result;
   }
  }
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  if (!(noOfAwards && team && age)) {
    return [];
  }
  let result = [];
  players.forEach((a) => {
    if (a.awards.length >= noOfAwards && a.team == team && a.age < age) {
      result.push(a)
    }
  })
  if (!result) {
    return [];
  }
  else {
    return result;
  }
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
