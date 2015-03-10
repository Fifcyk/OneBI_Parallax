Template.kontaktList.helpers({
    kontakty: function()
    {
        return orion.entities.kontakt.collection.find();
    }
});