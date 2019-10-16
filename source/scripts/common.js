window.onload = function(){
	getUnsplashPhoto();
};

function getUnsplashPhoto () {
	let img,
			imgWidth = 1920,
			page = document.querySelector('.page'),
			gradient = 'linear-gradient(rgba(27, 27, 27, 0.95), rgba(27, 27, 27, 0.95))',
			url = 'https://api.unsplash.com/photos/random?query=code',
			key = '014814fc8506afa36ed2536f98b15c68e497fe02cffc84f513db497c89288526';

	if (localStorage.getItem('imgUrl') == null || Number(localStorage.getItem('time')) + 86400000 < Date.now()) {
		let xhr = new XMLHttpRequest();

		xhr.open('GET', url);
		xhr.setRequestHeader('Authorization', 'Client-ID ' + key);
		xhr.responsetype = 'json';

		xhr.send();

		xhr.onload = function() {
			img = JSON.parse(xhr.response);
			img = img.urls.full + '&w' + imgWidth;

			localStorage.setItem('imgUrl', img);
			localStorage.setItem('time', Date.now());
			
			page.style.backgroundImage = gradient + ',' + 'url(' + img + ')';
		};
	} else {
			page.style.backgroundImage = gradient + ',' + 'url(' + localStorage.getItem('imgUrl') + ')';
	}
};