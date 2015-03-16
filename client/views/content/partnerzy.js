Template.partnerzyList.helpers({
    partnerzyLista: function()
    {
        return orion.entities.partnerzy.collection.find();
    }
});