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
    forbidClientAccountCreation: false,
    defaultPermissions: [
        'files.folders',
        'files.upload',
        'files.delete',
        'dictionary.public',
        'entity.podejscie.personal',
        'entity.aktualnosci.personal',
        'entity.uslugi.personal',
        'entity.partnerzy.personal',
        'entity.praca.personal',
        'entity.kontakt.personal'
         // Users can create, update, and delete posts created by them
    ]
})

if (Meteor.isServer) {
    /**
     * We will publish the users names
     */
    Meteor.publish("usersNames", function () {
        return Meteor.users.find({}, { fields: { profile: 1 } });
    });
}