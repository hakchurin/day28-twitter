
import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import session from './session';
import SignUpView from './signUp';
import LoginView from './login';
import TweetForm from './tweetPage';
//import TweetPost from './tweetPost';
import TweetView from './tweetView';
import HeaderView from './header';


const Router = Backbone.Router.extend({
    routes: {
      signUp: 'signUpFunction',
        login: 'loginFunction',
        tweet: 'tweetFunction',
        tweetPost: 'tweetPostFunction'

    },
    signUpFunction: function() {
      let signUpView = new SignUpView();
      signUpView.render();
        $('.container').empty().append(signUpView.$el);


  },
  loginFunction: function() {
    let loginView= new LoginView();
    loginView.render();
      $('.container').empty().append(loginView.$el);
      router.navigate('login', {trigger: true});


},
tweetFunction: function() {
  //  $('.container').empty().append(tweets);
    let tweetForm = new TweetForm();
    $('.container').empty().append(tweetForm.$el);
    tweetForm.render();

    console.log(tweetForm);

},
tweetPostFunction: function(){
  let headerView = new HeaderView();
  let tweetView = new TweetView();
  tweetView.render();
  let tweetForm = new TweetForm();
  $('.container').empty().append(headerView.render().$el).append(tweetForm.$el).append(tweetView.$el);
  tweetForm.render();

  // $('.container').empty().append(tweetForm.$el);

}


});



const router = new Router();
export default router;
