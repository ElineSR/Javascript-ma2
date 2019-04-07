//MODULE ASSIGNMENT 2 - LEVEL 1 (Eline Selenius Riise)
//1. Create a function that displays prototypal inheritance
	
	function horse(){
		this.breed = "Mogolian horse"
	
	}
	horse.prototype.type = function (){
		console.log("My origins comes from the "+ this.breed);
	};
	
	var fjord = new horse();
	fjord.type();
	

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

	var myArray = [1,2,3,4,5,6,7,8,9,10];
	
	var arraySliced5 = myArray.slice(4,5);
	
	console.log(arraySliced5); // [5] it works!
	
	

//3. Delete the last number in the array that you created above.

	var arrayPopOff = myArray.pop();
	
	console.log(arrayPopOff); // 10
	console.log(myArray); //1,2,3,4,5,6,7,8,9



//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
	

	function berryFruitString(){
		var str = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
		var res = str.split (" ");	
}
///NOT COMPLETE!  I was thinking I would find a way to replace strawberry and strawberries now that I have made the string into an array, and then combine it back to a string.


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

		
	var fotballClubs = ["Liverpool", "Brann", "Manchester", "Lillestrøm"];
	

	function myFunction() {
 	fotballClubs.splice(0,4);
 	fotballClubs.push("volvo","Hyundai","Ford","Toyota");
 	console.log(fotballClubs);
 	} 	
	
}

//NOT COMPLETE! Needed to figure out the button and  etc.

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var  people =[
 {name: "Jon", height: 173, homeOwner: "No", favColour: "blue"},	
 {name: "Mia", height: 152, homeOwner: "yes", favColour: "red"},
 {name: "Trygve", height: 189, homeOwner: "No", favColour: "green"}
]

var peopleName = people.filter(names, function(name){
	return peolpe.name === "Mia";
}) 

//var peopleName = people.map(names, function(people){
//	return people.name 
//}) 

//NOT COMPLETE! tried to use the example from the Lynda course. got confused.




//7. Create a simple function that logs the date.

