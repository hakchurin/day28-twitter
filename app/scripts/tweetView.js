import $ from 'jquery';
import twitter from './tweetCollection';
import router from './router';
import Backbone from 'backbone';
import TweetPost from './tweetPost';



const TweetView = Backbone.View.extend({
  initialize: function(){
    twitter.fetch();
    twitter.on('update', () => {
      this.render();
    });
  },
  tagName: 'ul',
  className: 'tweetList',


  render: function() {
    this.$el.html('');
    twitter.forEach((tweet) => {
      let tweetPost = new TweetPost({model:tweet});
      tweetPost.render();
      this.$el.append(tweetPost.$el);

    });
    return this;
  }
});

export default TweetView;
