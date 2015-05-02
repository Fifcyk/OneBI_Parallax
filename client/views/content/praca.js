Template.pracaOpis.helpers({
    tytul: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.pracaOpis.collection.findOne().title;
        }
        else if(jezyk === 'English') {
            return orion.entities.jobsDescription.collection.findOne().title;
        }
    },
    pracaOpis: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.pracaOpis.collection.findOne().body;
        }
        else if(jezyk === 'English') {
            return orion.entities.jobsDescription.collection.findOne().body;
        }
    },
    pracaOpis2: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return orion.entities.pracaOpis.collection.findOne().body2;
        }
        else if(jezyk === 'English') {
            return orion.entities.jobsDescription.collection.findOne().body2;
        }
    }
});


Template.pracaList.helpers({
    stanowisko: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski')
        {
            return orion.entities.praca.collection.find();
        }

        else if(jezyk === 'English')
        {
            return orion.entities.jobs.collection.find();
        }
    },
    titleC:function()
    {
        return Session.get("titleC");
    },
    bodyC:function()
    {
        return Session.get("bodyC");
    },
    szczegoly: function()
    {
        var jezyk = Session.get('version');
        if(jezyk === 'Polski') {
            return 'SZCZEGÓŁY OFERTY';
        }
        else if(jezyk === 'English') {
            return 'CHECK DETAILS';
        }
    }
});

Template.pracaList.rendered=function()
{
  //  $(document).ready(function() {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered

            $('#modal1').openModal();
           // $('body').css('overflow', 'hidden')
            $('#modal1').closeModal();
          //  $('body').css('overflow', 'auto');

        $('.modal-trigger').leanModal(
           // $('body').css('overflow', 'hidden')
            { ready: function() {$('body').css('overflow', 'hidden')},
              complete: function() {$('body').css('overflow', 'auto')}
            }
        );
   // });
};
Template.pracaList.events({
    'click .collection-item': function (e) {
        e.preventDefault();
        //   alert("Kliknięto!"+this.title+ ".   body="+this.body);
        var jezyk = Session.get('version');
        if(jezyk === 'Polski')
        {
            Session.set('titleC',
                orion.entities.praca.collection.findOne({_id: this._id}).title);
            Session.set('bodyC',
                orion.entities.praca.collection.findOne({_id: this._id}).body);
        }
        else if(jezyk === 'English')
        {
            Session.set('titleC',
                orion.entities.jobs.collection.findOne({_id: this._id}).title);
            Session.set('bodyC',
               orion.entities.jobs.collection.findOne({_id: this._id}).body);
        }
    }
});
