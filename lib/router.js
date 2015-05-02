/**
 * Created by marzena on 04.03.15.
 */
Router.route('/manager',{
   name:'manager',
   layoutTemplate: 'layoutManager'
});
Router.route('/pl',{
    name: "stronaGlowna",
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {

        return [
            orion.subs.subscribe('entity', 'podejscie'),
            orion.subs.subscribe('entity', 'kontakt'),
            orion.subs.subscribe('entity', 'aktualnosci'),
            orion.subs.subscribe('entity', 'uslugi'),
            orion.subs.subscribe('entity', 'uslugiPozycje'),
            orion.subs.subscribe('entity', 'partnerzy'),
            orion.subs.subscribe('entity', 'praca'),
            orion.subs.subscribe('entity', 'header'),
            //orion.subs.subscribe('entity', 'aktualnosciOpis'),
            orion.subs.subscribe('entity', 'partnerzyOpis'),
            orion.subs.subscribe('entity', 'pracaOpis')
        ]
    }/*,
    data: function()
    {
        return orion.entities.podejscie.collection.findOne()
    }*/

});

Router.route('/',{
    name: "mainPage",
    layoutTemplate: 'layoutEN',
    loadingTemplate: 'loading',
    waitOn: function() {

        return [
            orion.subs.subscribe('entity', 'servicesPositions'),
            orion.subs.subscribe('entity', 'partners'),
            orion.subs.subscribe('entity', 'jobs'),
            orion.subs.subscribe('entity', 'approach'),
            orion.subs.subscribe('entity', 'contact'),
            orion.subs.subscribe('entity', 'news'),
            orion.subs.subscribe('entity', 'services'),
            orion.subs.subscribe('entity', 'headerEN'),
            //orion.subs.subscribe('entity', 'newsDescription'),
            orion.subs.subscribe('entity', 'partnersDescription'),
            orion.subs.subscribe('entity', 'jobsDescription')
        ]
    }
});

Router.onBeforeAction(function() {
    //orion.subs.subscribe('entity', 'partnerzyOpis').load();
    GoogleMaps.load();
    this.next();
}, { only: ['stronaGlowna','mainPage'] });



