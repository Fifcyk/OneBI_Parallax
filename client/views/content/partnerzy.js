Template.partnerzyOpis.helpers({
    tytul: function ()
    {
        var jezyk = Session.get('version');

        if (jezyk === 'Polski') {

            return orion.entities.partnerzyOpis.collection.findOne().title;
        }
        else if (jezyk === 'English') {
            return orion.entities.partnersDescription.collection.findOne().title;
        }
    },
    tresc: function ()
    {
        var jezyk = Session.get('version');

        if (jezyk === 'Polski') {
            return orion.entities.partnerzyOpis.collection.findOne().body;
        }
        else if (jezyk === 'English') {
            return orion.entities.partnersDescription.collection.findOne().body;
        }
    }

});

Template.partnerzyList.helpers({
    partnerzyLista: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.partnerzy.collection.find();
        }
        else if(jezyk === 'English') {
            return orion.entities.partners.collection.find();
        }
    },
    imagee:function()
    {
        return this.image.url;
    }
});

