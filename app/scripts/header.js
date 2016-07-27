import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import session from './session';




const HeaderView = Backbone.View.extend({
tagName: 'header',
  initialize: function (){
    session.on('change', ()=>{
      this.render();
    });

  },
  template: function(){
    return `
      <nav>

      </nav>
    `;
  },
render: function(){
  this.$el.html(this.template());

  if (session.get('username')){
    let $logoutBtn = $('<button id="logoutBtn">logout </button>');
    this.$('nav').append($logoutBtn);

    $logoutBtn.on('click', function(){
      session.clear();
      localStorage.removeItem('authtoken');

    });

  }else{
    let $loginBtn = $('<button id="loginButton"> login </button>');
    let $signupBtn = $('<button id="signupBtn"> Sign up </button>');
    this.$('nav').append($loginBtn).append($signupBtn);

    $loginBtn.on('click', function(){
      router.navigate('login', {trigger:true});
    });

    $signupBtn.on('click', function(){
      router.navigate('signUp', {trigger:true});
    });


  }
  return this;
}


});

export default HeaderView;
