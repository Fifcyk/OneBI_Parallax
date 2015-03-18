Template.kontaktList.helpers({
    kontakty: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.kontakt.collection.find();
        }
        else if(jezyk === 'English') {
            return orion.entities.contact.collection.find();
        }
    }
});