
import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import session from './session';
import signUp from './signUp';
import login from './login';
import TweetForm from './tweetPage';
//import TweetPost from './tweetPost';
import TweetView from './tweetView';


const Router = Backbone.Router.extend({
    routes: {
      signUp: 'signUpFunction',
        login: 'loginFunction',
        tweet: 'tweetFunction',
        tweetPost: 'tweetPostFunction'

    },
    signUpFunction: function() {
        $('.container').empty().append(signUp);

  },
  loginFunction: function() {
      $('.container').append(login);

},
tweetFunction: function() {
  //  $('.container').empty().append(tweets);
    let tweetForm = new TweetForm();
    $('.tweetPostContainer').empty().append(tweetForm.$el);
    tweetForm.render();

    console.log(tweetForm);

},
tweetPostFunction: function(){
  let tweetView = new TweetView();
  tweetView.render();
  let tweetForm = new TweetForm();
  $('.tweetPostContainer').empty().append(tweetForm.$el);
  tweetForm.render();

  $('.tweetFeed').empty().append(tweetForm.$el).append(tweetView.$el);

}


});



const router = new Router();
export default router;
