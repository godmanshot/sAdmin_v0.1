import axios from 'axios';

export default class ResourseBuilder {

	constructor(url, model_class) {
		this.url = url;
	}

	all(access = null, error = null) {
		axios.get(this.url)
		  .then(function (response) {
		  	access ? access(response.data) : console.log(response.data);
		  })
		  .catch(function (errors) {
		  	error ? error(errors) : console.log(error);
		  });

	}
}