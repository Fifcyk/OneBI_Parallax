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
        var jezyk = Session.get('version');
        if(jezyk === 'Polski')
        {
            var icon=this.ikona;
        }
        else if(jezyk === 'English')
        {
            var icon=this.icon;
        }
            return icon+" orange-text";
    },
    image: function()
    {
        return this.image.url;
    }
});
Template.uslugiOpis.helpers({
    tytul: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.uslugi.collection.findOne().title;
        }
        else if(jezyk === 'English') {
            return orion.entities.services.collection.findOne().title;
        }
    },
    uslugaOpis: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.uslugi.collection.findOne().body;
        }
        else if(jezyk === 'English') {
            return orion.entities.services.collection.findOne().body;
        }
    },
    uslugaOpis2: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.uslugi.collection.findOne().body2;
        }
        else if(jezyk === 'English') {
            return orion.entities.services.collection.findOne().body2;
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