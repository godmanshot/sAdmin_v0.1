import ResourseBuilder from './ResourseBuilder';

export default class Model {

	static resourseUrl(url) {
		this.resUrl = url;
	}

	static getBuilder() {
		return new ResourseBuilder(this.resUrl, this);
	}
}