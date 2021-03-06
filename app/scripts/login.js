import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';
import session from './session';






const loginView = Backbone.View.extend({
  tagName: 'div',
  className: 'loginForm',
  events:{
    'click #loginBtn': 'loginFunction',
  },
  loginFunction: function(evt){
    evt.preventDefault();
    let username = this.$('#username').val();
    let password = this.$('#password').val();
    session.login(username,password);
    router.navigate('tweet', {trigger:true});
  },
  // signUpFunction: function(evt){
  //   evt.preventDefault();
  //   router.navigate('signup', {trigger:true});
  // },
  template: function(){
    return `
    <h2> Login </h2>
    <input type="text" id="username" name="username" placeholder="username">
    <input type="text" id="password" name="password" placeholder="password">
    <button id="loginBtn"> Submit</button>
      `;
  },
  render: function(){
     this.$el.html(this.template());
     return this;
  },
});
export default loginView;









// function loginInfo() {
//     let login = $(`
//     <form class="username">
//     <h3>Username</h3>
//     <input type="text" name="title" class="username" placeholder="Username">
//     <h3> Password</h3>
//     <input type="text" name="title" class="password" placeholder="Password">
//     <input type="submit" class="submit" name="submit" value="submit">
//     </form>
//
//   `);
//     login.find('input[type="submit"]').on('click', function(evt) {
//         evt.preventDefault();
//         let username = login.find('.username').val();
//         let password = login.find('.password').val();
//         var encrypted = btoa(settings.appKey + ':' + settings.appSecret);
//
//         $.ajax({
//             type: 'POST',
//             url: `https://baas.kinvey.com/user/${settings.appKey}/login`,
//             data: JSON.stringify({
//                 username: username,
//                 password: password
//             }),
//             headers: {
//                 Authorization: `Basic ${encrypted}`
//             },
//             contentType: 'application/json',
//             success: function(response) {
//                 session.username = username;
//                 session.authtoken = response._kmd.authtoken;
//                 localStorage.setItem('authtoken',response._kmd.authtoken);
//                 location.hash = 'tweet';
//             },
//             error: function(response) {
//               console.log('ERROR', response);
//             }
//         });
//     });
//     console.log(loginInfo);
//     return login;
//
// }
// export default loginInfo;
