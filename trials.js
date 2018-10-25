"use strict";

/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info

// Add function to prnt profile info
function showProfile(name, catchphrase, location){
	console.log(`PROFILE:\n\tName: ${name}\n\tCatchphrase: ${catchphrase}\n\tLocation: ${location}`)
}


/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

// Add function to print interests
function showLikes(likesArray){
	console.log("Things I like:")
	for (let i = 0; i < likesArray.length; i+=1){
		console.log('\t'+likesArray[i]);
	}
}

/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
  food: 'pebbles',
  tree: 'palm',
  quote: 'Bock bock bock'
};

// Add function to print favorites
function showFavs(favsObject){
	console.log("These are a few of my favorite things:");
	for (let key of Object.keys(favsObject)){
		console.log(`\t${key}: ${favsObject[key]}`);
	}
}


/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

// Add function to add transaction
function addTransaction(date, amount, object){
	object[date] = amount
}

// Create object to hold transactions
const transactions = {};

// Add transactions to object
addTransaction('may2', -500, transactions)
addTransaction('may13', +1200, transactions)
addTransaction('may15', -100, transactions)
addTransaction('may21', -359, transactions)
addTransaction('may29', +2200, transactions)

console.log(transactions)


/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status
function getBalanceStatus(balance){
	if (balance < 0){
		return 'YOU ARE OVERDRAWN'
	} else if (balance < 20){
		return 'Warning! Your balance is almost 0!'
	} else {
		return 'Normal'
	}
}



/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance
function getCurrentBalance(balance, transactions){
	for (let key of Object.keys(transactions)){
		balance += transactions[key]
	}
	return balance
}

/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity
function showAcctActivity(balance, transactions){
	
	console.log('TRANSACTIONS:');
	for (let key of Object.keys(transactions)){
		console.log(`\t${key}: ${transactions[key]}`);
	}
	
	const newBalance = getCurrentBalance(balance, transactions);
	console.log(`CURRENT BALANCE: ${newBalance}`);

	const status = getBalanceStatus(newBalance);
	console.log(`CURRENT STATUS: ${status}`)

}



/////////////////////////////////////////////////////////
// Creating a User Object

// Add user object
const user = {
	username: "Jerrold",
	catchphrase: "mehhhhh",
	location: "couch",
	interests: interests,
	favorites: favorites,
	transactions: transactions,
	startBalance: 4}

// Add function to print user dashboard
function printDashboard(userObj){
	showProfile(user.username, user.catchphrase, user.location);
	showLikes(user.interests);
	showFavs(user.favorites);
	showAcctActivity(user.startBalance, user.transactions);

}


// /////////////////////////////////////////////////////////
// // PART 3

// // Add object that keeps track of premium members
const premiumMembers = {
	Nelom: {
		email: 'nel@om.me',
		tier: 'gold'
	},
	Shell: {
		email: 'sh@ell.by',
		tier: 'gold'
	},
	Nardog: {
		email: 'nardog@sing.er',
		tier: 'silver'
	}
};
// Add function to return emails of premium members
function getPremiumEmails(){
	const emails = [];
	for (let name of Object.keys(premiumMembers)){
		emails.push(premiumMembers[name]['email']);
	}
	return emails
}


/////////////////////////////////////////////////////////
// PART 4

// Add function to assign interns to workdays
const interns = ['Jerrold', 'Murphy', 'gitignore', 'python']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
'Saturday'
]
function makeSchedule(internArray){

	for (let j=0; j < days.length; j++){
		let i = Math.floor(Math.random() * Math.floor(internArray.length));
		console.log(`${days[j]}: ${internArray[i]}`);
	}
}
// Add a function to generate customer support hours

