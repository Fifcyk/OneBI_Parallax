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
    }
});

Template.pracaList.rendered=function()
{
    $(document).ready(function() {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal({});
        $(document).ready(function () {
            $('#modal1').openModal();
        });
        $(document).ready(function () {
            $('#modal1').closeModal();
        });

        $('.modal-trigger').leanModal(
        );
    });
}
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
