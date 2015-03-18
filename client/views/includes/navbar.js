/**
 * Created by Fifcyk on 18.03.15.


Template.navbar.events({
    'click .btnLngPl': function(e)
    {
        Session.set('version', "Polski");
    },
    'click .btnLngEn': function(e)
    {
        Session.set('version', "English");
    },
    'click .btnLngPlMobile': function(e)
    {
        Session.set('version', "Polski");
    },
    'click .btnLngEnMobile': function(e)
    {
        Session.set('version', "English");
    }
}); */