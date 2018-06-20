import ResourseBuilder from './ResourseBuilder';

export default class Model {

	static resourseUrl(url) {
		this.resourseUrl = url;
	}

	static getBuilder() {
		return new ResourseBuilder(this.resourseUrl, this);
	}
}