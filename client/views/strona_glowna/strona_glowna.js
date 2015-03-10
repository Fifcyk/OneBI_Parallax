/**
 * Created by Fifcyk on 05.03.15.
 */
Template.stronaGlowna.helpers({
    podejscie: function() {
        return this.body;
       // orion.entities.podejscie.collection.findOne().body;
    },
    kontakt: function() {
        return orion.entities.kontakt.collection.findOne().body;
    }
});