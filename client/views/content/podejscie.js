Template.podejscieItem.helpers({
    tresc: function()
      {
          return orion.entities.podejscie.collection.findOne().body;
      },
    tytul: function()
    {
        return orion.entities.podejscie.collection.findOne().title;
    }
});