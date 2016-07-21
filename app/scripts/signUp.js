import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';
import session from './session';


function signUpInfo() {
    let signUp = $(`
    <form class="username">
    <h1> Create </h1>
    <h3>Username</h3>
    <input type="text" name="title" class="username" placeholder="Username">
    <h3> Password</h3>
    <input type="text" name="title" class="password" placeholder="Password">
    <input type="submit" class="submit" name="submit" value="submit">
    </form>

  `);
    signUp.find('input[type="submit"]').on('click', function(evt) {
        evt.preventDefault();
        let username = signUp.find('.username').val();
        let password = signUp.find('.password').val();
        var encrypted = btoa(settings.appKey + ':' + settings.appSecret);

        $.ajax({
            type: 'POST',
            url: `https://baas.kinvey.com/user/${settings.appKey}`,
            data: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                Authorization: `Basic ${encrypted}`
            },
            contentType: 'application/json',
            success: function(response) {
                session.username = username;
                session.authtoken = response._kmd.authtoken;
                localStorage.setItem('authtoken',response._kmd.authtoken);
                location.hash = 'tweet';
            },
            error: function(response) {
              console.log('ERROR', response);
            }
        });
    });
    return signUp;

}
export default signUpInfo;
