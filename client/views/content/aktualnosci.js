Template.aktualnosciList.helpers({
    aktualnosci: function()
    {
        return orion.entities.aktualnosci.collection.find();
    }
});