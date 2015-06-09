$(document).ready(function(){

// function used to create objects
	function item(name, description, url, href) {
	    this.name = name;
	    this.description = description;
	    this.url = url;
	    this.href = href;
	}

// Create objects
// WHEN YOU MAKE A NEW OBJECT ADD IT TO THE ARRAY 'ITEMS'
// var firstImage = new item("Product Name", "This is one of our products", "http://placehold.it/360x240");
var firstImage = new item("HTML5", "I am a master at using HTML5 to create seamless UX/UI experiences that are both functional and responsive.", "styles/images/html5.png", "http://www.w3schools.com/html/html5_intro.asp");
var secondImage = new item("CSS3", "I'm fully equipped with CSS3 to make my designs fluid and aesthically pleasing.", "styles/images/css3.png", "http://www.w3schools.com/css/css3_intro.asp");
var thirdImage = new item("JQuery", "I am fluent in using the JQuery library to make websites interactive and respond to different user actions.", "styles/images/jquery.png", "http://www.jquery.com");
var fourthImage = new item("Javascript", "Javascript is the first true programming language I learned. It allows me to treat my code like real objects and use logic to tell the computer what to do with them.", "styles/images/javascript.png", "http://www.w3schools.com/js/");

// Array of created objects
var items = [firstImage, secondImage, thirdImage, fourthImage];

// Unhides display zone
	function showZone() {
		$('div.thumbnail a img').on('click', function(){
			$('div#display-zone2').addClass('show-zone');
		});
	};

// Loads image thumbnail in display zone on click	
	function loadImage() {
		$('div.thumbnail a img').on('click', function(){
			var image = this.src;
			$('.image-load').html('<img src="' + image + '">');
		});
	};

// Loads name and description associated with thumbnail
	function loadDescription() {
		$('div.thumbnail a img').on('click', function(){
			var id = this.id;
			$('#product-name').text(items[id].name);
			$('#product-description').text(items[id].description);
			$('a.btn').attr('href', items[id].href);

		});
	};

// Close display zone
	function closeZone() {
		$('a#closeThis').on('click', function(){
			$('div#display-zone2').toggleClass('show-zone');
		})
	}

// Call Functions
	loadImage();
	loadDescription();
	showZone();
	closeZone();
});