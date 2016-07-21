import $ from 'jquery';
// import moment  from 'moment';
import twitter from './tweetCollection';
import router from './router';
import Backbone from 'backbone';




const TweetPost = Backbone.View.extend({
  initialize: function(){
  },
  tagName: 'li',
  className: 'tweetPost',
  template: function(){
    console.log('template');
    return `
      <li>
        <p>${this.model.get('username')}</p>
        <p class="tweet">${this.model.get('body')}</p>
      </li>
    `;
  },
  render: function() {
    this.$el.html(this.template());
    console.log(this.$el);
    return this;
  }
});


export default TweetPost;
