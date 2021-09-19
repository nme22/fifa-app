function getData() {
    fetch("https://api-football-beta.p.rapidapi.com/countries", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-beta.p.rapidapi.com",
		"x-rapidapi-key": football_api_key
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}