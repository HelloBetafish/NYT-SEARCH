	var apiKey = "c45a92c946334032a4a2b20d9faec1c3";

	//testing userSearch with trump for now. This variable will be filled with the Search Term bar from the front end.
	var userSearch = "trump";  


	//beginDate and endDate will be filled from Start Year and End Year search bars from the front end.
	//The search bar is asking for the year, but we have to use the full date for the API.
	//We will force the user's input to fit the date format 
	//date format is YYYYMMDD
	//We will need to change user's input so it automatically fills the begin month and day as 
	//0101 (Jan 1.) and the end month and day as 1231 (Dec. 31)
	var beginDate = "20160101"; 
	var endDate = "20161231";

	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=" + apiKey + "&q=" + userSearch + "&begin_date=" + beginDate + "&end_date=" + endDate;
	$.ajax({
	  url: queryUrl,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});
