Template.uslugiList.helpers({
    usluga: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.uslugiPozycje.collection.find();
        }
        else if(jezyk === 'English') {
            return orion.entities.servicesPositions.collection.find();
        }
    }
});
Template.uslugiItem.helpers({
    ikona:function()
    {
        var icon=this.ikona;
        return icon+" orange-text";
    }
});
Template.uslugiOpis.helpers({
    uslugaOpis: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.uslugi.collection.findOne().body;
        }
        else if(jezyk === 'English') {
            return orion.entities.services.collection.findOne().body;
        }
    }
});
Template.aktualnosciList.rendered = function() {
    $(document).ready(function () {
        $('.collapsible').collapsible({
            accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
    });
};