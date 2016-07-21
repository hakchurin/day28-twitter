import Backbone from 'backbone';
import tweetModel from './tweetModel';
import settings from './settings';
import TweetView from './TweetCollection';

const TweetCollection = Backbone.Collection.extend({
  model: tweetModel,
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/tweets/`
});

var twitter = new TweetCollection();

export default twitter;
