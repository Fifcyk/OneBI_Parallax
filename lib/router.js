/**
 * Created by marzena on 04.03.15.
 */
Router.route('/manager',{
   name:'manager',
   layoutTemplate: 'layoutManager'
});

Router.route('/',{
    name:"stronaGlowna",
    layoutTemplate:'layout',
    title:"OneBI"
});