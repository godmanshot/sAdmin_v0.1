import axios from 'axios';

export default class ResourseBuilder {

	constructor(url, model_class) {
		this.url = url;
		this.model_class = model_class;
	}

	paginate(page, access = null, error = null) {
		axios.get(this.url+'?page='+page)
		  .then(function (response) {
		  	access ? access(response.data) : console.log(response.data);
		  })
		  .catch(function (errors) {
		  	error ? error(errors) : console.log(error);
		  });

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

	delete(identity, access = null, error = null) {
		axios.delete(this.url + '/'+ identity)
		  .then(function (response) {
		  	access ? access(response.data) : console.log(response.data);
		  })
		  .catch(function (errors) {
		  	error ? error(errors) : console.log(error);
		  });
	}
}