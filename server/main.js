import {Meteor} from 'meteor/meteor';
import Links from '/imports/api/links';
import {ServiceConfiguration} from 'meteor/service-configuration';

function insertLink(title, url) {
    Links.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {

  Meteor.publish(null, function () {
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        Trainer: 1
      }
    });
  });

  Meteor.users.allow({
    update: function (userId, user, fields, modifier) {
      // can only change your own documents
    if(user._id === userId)
      {
        Meteor.users.update({_id: userId}, modifier);
        return true;
      }
        else return false;
    }
  });

    ServiceConfiguration.configurations.upsert(
        {service: 'google'},
        {
            $set: {
                clientId: '863817864087-nk7oa8t4s2hgeh2eoqbf2lmtc8ppfdh4.apps.googleusercontent.com',
                loginStyle: 'popup',
                secret: 'gOhhSxJFZiqt7zktd6BQwcwm',
            },
        }
    );

    // If the Links collection is empty, add some data.
    if (Links.find().count() === 0) {
        insertLink(
            'Do the Tutorial',
            'https://www.meteor.com/tutorials/react/creating-an-app'
        );

        insertLink(
            'Follow the Guide',
            'http://guide.meteor.com'
        );

        insertLink(
            'Read the Docs',
            'https://docs.meteor.com'
        );

        insertLink(
            'Discussions',
            'https://forums.meteor.com'
        );
    }
});
