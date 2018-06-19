import axios from 'axios';

export default class ResourseBuilder {

	constructor(url) {
		this.url = url;
	}

	all(access = null, error = null) {
		axios.get(this.url)
		  .then(function (response) {
		  	access ? access(response.data) : console.log(response.data);
		  })
		  .catch(function (errors) {
		  	access ? error(errors) : console.log(error);
		  });

	}
}