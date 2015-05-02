/**
 * Created by marzena on 04.03.15.
 */
/**
 * Created by marzena on 04.03.15.
 */
/**
 * This will allow users create their accounts on /admin
 * and will add the following permissions
 */
orion.users.configure({
    forbidClientAccountCreation: true,
    defaultPermissions: [
        'files.folders',
        'files.upload',
        'files.delete',
        'dictionary.public',

        'entity.podejscie.all',
        'entity.approach.all',

        'entity.aktualnosci.all',
        'entity.news.all',

        'entity.uslugi.all',
        'entity.uslugiPozycje.all',

        'entity.services.all',
        'entity.servicesPositions.all',

        'entity.partnerzy.all',
        'entity.partners.all',

        'entity.praca.all',
        'entity.jobs.all',

        'entity.kontakt.all',
        'entity.contact.all',

        'entity.header.all',
        'entity.headerEN.all',

        //'entity.aktualnosciOpis.all',
        //'entity.newsDescription.all',

        'entity.partnerzyOpis.all',
        'entity.partnersDescription.all',

        'entity.pracaOpis.all',
        'entity.jobsDescription.all'
         // Users can create, update, and delete posts created by them
    ]
});

   /*  Meteor.users.allow({
     'update': function(userId, doc, fields, modifier) {
     var user = Meteor.users.findOne(userId);
     if (doc._id != userId && user.isAdmin) {
     var allowed = ['isAdmin', 'permissions']
     if (_.isEqual(_.union(allowed, fields), allowed)) {
     return true;
     }
     }

     return false
     },
     'remove': function(userId, doc) {
     var user = Meteor.users.findOne(userId);
     return userId && doc._id != userId  && user.isAdmin;
     }
     });*/


if (Meteor.isServer) {
    /**
     * We will publish the users names
     */
    Meteor.publish("usersNames", function () {
        return Meteor.users.find({}, { fields: { profile: 1 } });
    });
}