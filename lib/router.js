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
    waitOn: function() {

        return [
            orion.subs.subscribe('entity', 'podejscie'),
            orion.subs.subscribe('entity', 'kontakt'),
            orion.subs.subscribe('entity', 'aktualnosci')
        ]
    },
    data: function()
    {
        //if(orion.entities.getNamedItem()=='podejscie')
        return orion.entities.podejscie.collection.findOne()
    }

});
/*Router.map(function()
    {
        this.route('#kontakt'),
            this.route('podejscie', {path: '/#naszePodejscie',data:
                function()
                {
                    return orion.entities.podejscie.collection.findOne()
                }});
    }
)*/

/*Router.configure({
    layoutTemplate: 'layout'

});

Router.route('/manager',{
    name:'manager',
    layoutTemplate: 'layoutManager'
});

Router.map(function() {
    this.route('stronaGlowna', {path: '/'});
    this.route('post', {path: '/#naszePodejscie',data:
    function()
    {
        return orion.entities.podejscie.collection.findOne()
    }});
})*/
