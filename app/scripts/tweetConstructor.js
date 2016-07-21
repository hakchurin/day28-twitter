
import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';
import session from './session';
import tweets from './twitterPage';




TweetConstructor.prototype.save = function() {
    $.ajax({
        dataType: 'json',
        url: `https://baas.kinvey.com/user/${settings.appId}/tweetPage`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(this),
        success: (response) => {

        }
    });
};



export default TweetConstructor;
