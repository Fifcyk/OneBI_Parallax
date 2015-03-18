/**
 * Created by marzena on 09.03.15.
 */
orion.addEntity('uslugiPozycje', {
    title: {
        type: String,
        label: 'Tytuł',
        optional:false
    },
    body:orion.attribute('froala',{
        label:'Treść'
    }),
    ikona:{
        type:String,
        label:"Ikona. Wpisz nazwę wybranej ikony " +
        "z podanej strony: http://materializecss.com/icons.html"
    }
}, {
    icon: 'bookmark',
    sidebarName: 'Usługi pozycje',
    pluralName: 'Usługi pozycje',
    singularName: 'Pozycja',
    tableColumns: [
        { data:'title', title: 'Tytuł' },
        {data:'body',title:'Treść'},
        {data:'ikona',title:'Nazwa ikony'}
    ]
});
