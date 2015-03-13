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
    title: 'OneBI',
    waitOn: function() {

        return [
            orion.subs.subscribe('entity', 'podejscie'),
            orion.subs.subscribe('entity', 'kontakt'),
            orion.subs.subscribe('entity', 'aktualnosci')
        ]
    }/*,
    data: function()
    {
        return orion.entities.podejscie.collection.findOne()
    }*/

});

Router.route('/en',{
    name: "mainPage",
    layoutTemplate: 'layoutEN'
});

Router.onBeforeAction(function() {
    GoogleMaps.load();
    this.next();
}, { only: ['stronaGlowna','mainPage'] });



