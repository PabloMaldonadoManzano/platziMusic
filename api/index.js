import config from './config'

const apiKey = config.apiKey;
//const {apiKey} = config;
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`;

export default function getArtists(country)
{
	const url = URL.replace(':country', country);
	return fetch(url)
	.then(function(response){
		return response.json();
	}).then(function(json){
		return json.topartists.artist;
	}).catch(function(error){
		console.log(error);
	});
}
