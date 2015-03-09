/**
 * Created by marzena on 04.03.15.
 */

Router.route('/manager',{
   name:'manager',
   layoutTemplate: 'layoutManager'
});
Router.route('/',{
    name: "stronaGlowna",
    layoutTemplate: 'layout',
    title: "OneBI",
    waitOn: function() {
        /**
         * Here you have to subscribe to the publications.
         * Remember to always subscribe to the dictionary.
         */
        return [
            orion.subs.subscribe('entity', 'podejscie'),
            orion.subs.subscribe('usersNames')
        ]
    },
    data: function() {
        return orion.entities.podejscie.collection.findOne()
    }
});



