import App from './Models/App';
import Action from './Models/Action';
import Notification from './Models/Notification';
import News from './Models/News';
import Post from './Models/Post';

var url = App.url;
var base = App.baseRoute;

App.resourseUrl(url + base + '/resourse/app');
Action.resourseUrl(url + base + '/resourse/action');
Notification.resourseUrl(url + base + '/resourse/notification');
News.resourseUrl(url + base + '/resourse/news');
Post.resourseUrl(url + base + '/resourse/post');