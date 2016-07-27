import $ from 'jquery';
// import moment  from 'moment';
import twitter from './tweetCollection';
import router from './router';
import Backbone from 'backbone';
import session from './session';



const TweetPost = Backbone.View.extend({
  tagName: 'li',
  className: 'tweetPost',
  template: function(){
    console.log('template');
    return `

        <p id="user">@${this.model.get('username')}:</p>
        <p id="tweet">${this.model.get('body')}</p>

    `;
  },
  render: function() {
    this.$el.html(this.template());
    if (this.model.get('username') === session.get('username')){
      let $deleteBtn = $('<button class="deleteBtn"> Delete </button>');
      this.$el.append($deleteBtn);
      $deleteBtn.on('click', ()=>{
        this.model.destroy();

      });

    }

    return this;
  }
});


export default TweetPost;
