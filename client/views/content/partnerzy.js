Template.partnerzyList.helpers({
    partnerzy: function()
    {
        return orion.entities.partnerzy.collection.find();
    }
});