Template.podejscieItem.helpers({
    tresc: function()
      {
          return orion.entities.podejscie.collection.findOne().body;
      }
})