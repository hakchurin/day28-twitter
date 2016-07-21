

import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import session from './session';
import router from './router';
import twitter from './tweetCollection';
import TweetModel from './tweetModel';
//import entry from './entry';





const TweetForm = Backbone.View.extend({
  tagName: 'form',
  template: function(){
    return `

          <h1>write a Tweet </h1>
          <input type="text" name="post" class="post" placeholder="post">
          <input type="submit" class="submit" name="submit" value="submit">
  `;
},
  render: function(){

    this.$el.append(this.template());
  },
  events:{
    'click input[type="submit"]':'sendTweet'
  },

sendTweet: function(evt){
  evt.preventDefault();
console.log(session);
  twitter.create({
      username: session.get('username'),
      body: this.$('.post').val(),
      }, {

      success: function(response) {
        router.navigate('tweetPost',{trigger:true});
      },
      error: function() {}
  });
  this.$('input[type="text"]').val('');
}

});


export default TweetForm;





    // tweets.find('input[type="submit"]').on('click', function(evt) {

    //
    //
    // });
//
//
// return tweets;
// }
//
// export default twitterForm;
