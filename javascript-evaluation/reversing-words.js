

// JavaScript program to reverse a string
// we can do the above task by splitting and saving the string in a reverse manner. 
let s = ["i", "like", "this",
		"program", "very", "much"];
										
let ans ="";
for (let i = 5; i >= 0; i--)
{
	ans += s[i] + " ";
}
console.log(ans.slice(0,ans.length-1));


