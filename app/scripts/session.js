

import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import router from './router';

const Session = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}/login`,
  defaults: {
    username: '',
    authtoken: ''
  },
    parse: function(response) {
    if (response) {
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id
      };
    }
  },


  login: function(username, password) {
    this.save({username: username, password: password},
     {
      success: (model, response) => {
        this.unset('password');
        window.localStorage.setItem('authtoken', response._kmd.authtoken);
        //router.navigate('posts', {trigger: true});
        router.navigate(`tweet`, {trigger:true});
    },
    error: function() {
    }});
  },
  retrieve: function() {
    this.fetch({
      url: `https://baas.kinvey.com/user/${settings.appKey}/_me`
    });
  }
});

let session = new Session();

export default session;
