
import Backbone from 'backbone';
//import TweetModel from './collections/TweetCollection';
import settings from './settings';

const TweetModel = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/tweets`,

  defaults: {
     username: '',
     body: '',

   }


});


export default TweetModel;
