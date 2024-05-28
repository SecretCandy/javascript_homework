const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
}

localStorage.setItem("user", JSON.stringify(user));
console.log(localStorage.getItem("user"))
user.나이 = 30
localStorage.setItem("user", JSON.stringify(user));
localStorage.removeItem("user")
console.log(localStorage.getItem("user"))

fetch("https://jsonplaceholder.typicode.com/posts") 
	.then((res) => res.json())
	.then((data) => console.log(data))