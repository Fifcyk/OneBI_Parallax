/**
 * Created by Fifcyk on 05.03.15.
 */
Template.stronaGlowna.rendered = function() {
    $('.parallax').parallax();
    $('.button-collapse').sideNav({menuWidth: 600, activationWidth: 210});
    $('.scrollspy').scrollSpy();
}