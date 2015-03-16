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
        return orion.entities.aktualnosci.collection.find({},{sort:{createdAt:1}});
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
Template.aktualnosciList.rendered = function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        responsive:true,
        autoplay: true,
        autoplayTimeout:1300,
        autoplayHoverPause:true,
        loop:false,
        items : 3, //10 items above 1000px browser width
       // itemsDesktop : [1000,5], //5 items between 1000px and 901px
       // itemsDesktopSmall : [900,3], // betweem 900px and 601px
        //itemsTablet: [600,2], //2 items between 600 and 0
       // itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]



    });
  /*  $('.link').on('click', function(event){
        var $this = $(this);


        alert("Id obiektu"+$this.title);
        Session.set('titlee',
            orion.entities.aktualnosci.collection.findOne({_id:this._id}).title);


        if($this.hasClass('clicked')){
            $this.removeAttr('main').removeClass('clicked');
           // alert("if");
        } else{
            $this.css('background','red').addClass('clicked');


        }
    });*/

    // Custom Navigation Events
   /* $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })*/
   // $('#modal1').click(function(){
  //      owl.trigger('owl.stop');
  //  })

},
Template.aktualnosciList.events({
        'click .item': function(e)
        {
           // e.preventDefault();
            //alert(e.position);
         //   alert("Kliknięto!"+this.title+" "+this._id+this.image.url);
           Session.set('bodyy',
               orion.entities.aktualnosci.collection.findOne({_id:this._id}).body);
            Session.set('titlee',
                orion.entities.aktualnosci.collection.findOne({_id:this._id}).title);

            $("#kontenerAktualnosci").show();
        }
    });

