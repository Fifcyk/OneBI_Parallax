Template.aktualnosciOpis.helpers({
    tytul: function ()
    {
        var jezyk = Session.get('version');

        if (jezyk === 'Polski') {

            return orion.entities.aktualnosciOpis.collection.findOne().title;
        }
        else if (jezyk === 'English') {
            return orion.entities.newsDescription.collection.findOne().title;
        }
    },
    tresc: function ()
    {
        var jezyk = Session.get('version');

        if (jezyk === 'Polski') {
            return orion.entities.aktualnosciOpis.collection.findOne().body;
        }
        else if (jezyk === 'English') {
            return orion.entities.newsDescription.collection.findOne().body;
        }
    }

});


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
    },
    tytul: function()
    {
        return this.title;
    },
    tresc: function()
    {
        return this.body;
    },
    krotkaTresc: function()
    {
        return this.bodyShort;
    },
    czytaj: function()
    {
        var jezyk = Session.get('version');

        if (jezyk === 'Polski') {
            return 'CZYTAJ CAŁOŚĆ';
        }
        else if (jezyk === 'English') {
            return 'READ MORE';
        }
    },
    titleA:function()
    {
        return Session.get("titleA");
    },
    bodyA:function()
    {
        return Session.get("bodyA");
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
    },
    titleeShort: function()
    {
        return Session.get('titleeShort');
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
                Session.set('titleeShort',
                    orion.entities.aktualnosci.collection.findOne({_id:this._id}).titleShort);
            }
            else if(jezyk === 'English')
            {
                Session.set('bodyy',
                    orion.entities.news.collection.findOne({_id:this._id}).body);
                Session.set('titlee',
                    orion.entities.news.collection.findOne({_id:this._id}).title);
                Session.set('titleeShort',
                    orion.entities.news.collection.findOne({_id:this._id}).titleShort);
            }
            $("#kontenerAktualnosci").show();
        }
    });
Template.aktualnosciItem.events({
    'click .collection-itemA': function (e) {
        e.preventDefault();
        //   alert("Kliknięto!"+this.title+ ".   body="+this.body);
        var jezyk = Session.get('version');
        if(jezyk === 'Polski')
        {
            Session.set('titleA',
                orion.entities.aktualnosci.collection.findOne({_id: this._id}).title);
            Session.set('bodyA',
                orion.entities.aktualnosci.collection.findOne({_id: this._id}).body);
        }
        else if(jezyk === 'English')
        {
            Session.set('titleA',
                orion.entities.news.collection.findOne({_id: this._id}).title);
            Session.set('bodyA',
                orion.entities.news.collection.findOne({_id: this._id}).body);
        }
    }
});

Template.aktualnosciItem.rendered = function()
{
    $('#modal2').openModal();
    $('#modal2').closeModal();

    $('.modal-trigger').leanModal(
        { ready: function() {$('body').css('overflow', 'hidden')},
            complete: function() {$('body').css('overflow', 'auto')}
        }
    );
};