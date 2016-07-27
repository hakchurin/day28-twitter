import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';
import session from './session';






const signUpView = Backbone.View.extend({
    initialize: function() {},
    tagName: 'form',
    id: 'signUp',
    events: {
        'click #signupBtn': 'signUpFunction',
    },
    signUpFunction: function(evt) {
        evt.preventDefault();
        let name = this.$('input[name="name"]').val();
        let username = this.$('input[name="username"]').val();
        let email = this.$('input[name="email"]').val();
        let password = this.$('input[name="password"]').val();

        session.save({
                name: name,
                username: username,
                email: email,
                password: password
            },
            {
                url: `https://baas.kinvey.com/user/${settings.appKey}`,
                success: function(model, response) {
                  console.log(response);
                  console.log(session);
                    model.unset('password');
                    window.localStorage.setItem('authtoken',response._kmd.authtoken);
                    router.navigate(`tweet`, {trigger: true});
                    $('input[name="username"]').val();
                }
            });
      },
    // <input id="signupBtn" type="submit" name="signUp" placeholder="signup">

    template: function() {
        return `
      <h2> Sign Up </h2>
      <input type="text" id="name"  name="name" placeholder="name"/>
      <input type="text" id="email"  name="email" placeholder="email"/>
      <input type="text" id="username"  name="username" placeholder="username"/>
      <input type="text" id="password"  name="password" placeholder="password"/>
      <button id= "signSubmit">submit </button>
      `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }

});
export default signUpView;









// function signUpInfo() {
//     let signUp = $(`
//     <form class="username">
//     <h1> Create </h1>
//     <h3>Username</h3>
//     <input type="text" name="title" class="username" placeholder="Username">
//     <h3> Password</h3>
//     <input type="text" name="title" class="password" placeholder="Password">
//     <input type="submit" class="submit" name="submit" value="submit">
//     </form>
//
//   `);
//     signUp.find('input[type="submit"]').on('click', function(evt) {
//         evt.preventDefault();
//         let username = signUp.find('.username').val();
//         let password = signUp.find('.password').val();
//         var encrypted = btoa(settings.appKey + ':' + settings.appSecret);
//
//         $.ajax({
//             type: 'POST',
//             url: `https://baas.kinvey.com/user/${settings.appKey}`,
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
//     return signUp;
//
// }
// export default signUpInfo;
