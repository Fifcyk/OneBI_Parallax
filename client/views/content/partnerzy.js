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
    }
});