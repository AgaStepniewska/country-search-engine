$(document).ready(function() {
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('.list1');
	var countryList2 = $ ('.list2');
	var landName = $('#landname');
	
	$('.title').hide();
	$('#search').click(searchCountries);
	$('.countries').hide();
	function searchCountries() {
		var countryName = $('#country-name').val();
		if(!countryName.length) countryName = "Poland";
		$.ajax({
			url: url + countryName,
		  	method: 'GET',
		  	success: showCountriesList
		});
	}	
	
	function showCountriesList(resp) {
	  	countriesList.empty();
	  	countryList2.empty();
	  	landName.empty();
	  	$('.title').show();
	  	$('.countries').show();
	  	resp.forEach(function(item) {
	   		$('<h3>').text(item.name).appendTo(landName);
	   		$('<li>').html('<span>Capital:    </span>' + item.capital).appendTo(countriesList);
	   		$('<li>').html('<span>Currencies:    </span>' + item.currencies).appendTo(countriesList);
	   		$('<li>').html('<span>Region:    </span>' + item.region).appendTo(countriesList);
			$('<li>').html('<span>Population:    </span>' + item.population).appendTo(countryList2);
			$('<li>').html('<span>Language:    </span>' + item.languages).appendTo(countryList2);
			$('<li>').html('<span>Country Area:    </span>' + item.area).appendTo(countryList2);
		});
	}
	$('a').on('click', function(event) {
		if (this.hash !== "") {
		    event.preventDefault();
		    var hash = this.hash;
		    $('html, body').animate({
			    scrollTop: $(hash).offset().top}, 
			    1200, 
			    function(){
		        	window.location.hash = hash;
		    	}
		    );
		}
	});
});