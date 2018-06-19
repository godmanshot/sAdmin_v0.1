import ResourseBuilder from './ResourseBuilder';

export default class Model {
	contstructor() {
		
	}

	static resourseUrl(url) {
		this.resourseUrl = url;
	}

	static getBuilder() {
		return new ResourseBuilder(this.resourseUrl);
	}
}