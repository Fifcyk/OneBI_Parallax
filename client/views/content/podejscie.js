Template.podejscieItem.helpers({

    tresc: function()
      {
          var jezyk = Session.get('version');
          if(jezyk === 'Polski')
          {
            return orion.entities.podejscie.collection.findOne().body;
          }
          else if(jezyk === 'English')
          {
            return orion.entities.approach.collection.findOne().body;
          }
      },
    tytul: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski')
        {
            //alert(orion.entities.podejscie.collection.findOne().title);
            return orion.entities.podejscie.collection.findOne().title;

        }
        else if(jezyk === 'English')
        {
            //alert(orion.entities.approach.collection.findOne().title);
            return orion.entities.approach.collection.findOne().title;
        }


    }
});