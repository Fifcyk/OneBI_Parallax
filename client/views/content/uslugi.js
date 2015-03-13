Template.uslugiList.helpers({
    usluga: function()
    {
        return orion.entities.uslugiPozycje.collection.find();
    }
});
Template.uslugiItem.helpers({
    ikona:function()
    {
        var icon=this.ikona;
        return icon+" orange-text";
    }
});
Template.aktualnosciList.rendered = function() {
    $(document).ready(function () {
        $('.collapsible').collapsible({
            accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
    });
}