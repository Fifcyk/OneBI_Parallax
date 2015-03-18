Template.aktualnosciItem.helpers({
    createdAt:function()
    {
        var data=moment(this.createdAt);
      //  return (new Date(data)).toDateString('yyy-MM-dd');
        return data.format('DD-MM-YYYY');
    },
    imagee:function()
    {
        return this.image.url;
    }
});
Template.aktualnosciList.helpers({
    aktualnosci: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski')
        {
            return orion.entities.aktualnosci.collection.find({},{sort:{createdAt:1}});
        }
        else if(jezyk === 'English')
        {
            return orion.entities.news.collection.find({},{sort:{createdAt:1}});
        }
    },
    bodyy: function()
    {
        return Session.get('bodyy');
    },
    titlee: function()
    {
        return Session.get('titlee');
    }
});

Template.aktualnosciList.events({
        'click .item': function(e)
        {
           // e.preventDefault();
            //alert(e.position);
         //   alert("Kliknięto!"+this.title+" "+this._id+this.image.url);
            var jezyk = Session.get('version');
            if(jezyk === 'Polski')
            {
                Session.set('bodyy',
                   orion.entities.aktualnosci.collection.findOne({_id:this._id}).body);
                Session.set('titlee',
                    orion.entities.aktualnosci.collection.findOne({_id:this._id}).title);
            }
            else if(jezyk === 'English')
            {
                Session.set('bodyy',
                    orion.entities.news.collection.findOne({_id:this._id}).body);
                Session.set('titlee',
                    orion.entities.news.collection.findOne({_id:this._id}).title);
            }
            $("#kontenerAktualnosci").show();
        }
    });

