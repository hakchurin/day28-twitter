import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';
import session from './session';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('intercepted');
  if (localStorage.getItem('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
  console.log('ajax send function ', arguments);
});

if (localStorage.getItem('authtoken')){
  session.retrieve();
}

Backbone.history.start();
