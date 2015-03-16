orion.addEntity('servicesPositions', {
    title: {
        type: String,
        label: 'Service name',
        optional:false
    },
    body:orion.attribute('froala',{
        label:'Body'
    }),
    icon:{
        type:String,
        label:"Ikona. Wpisz nazwę wybranej ikony " +
        "z podanej strony: http://materializecss.com/icons.html"
    }
}, {
    icon: 'bookmark',
    sidebarName: 'Service positions',
    pluralName: 'Service positions',
    singularName: 'position',
    tableColumns: [
        { data:'title', title: 'Title' },
        {data:'body',title:'Body'},
        {data:'icon',title:'Nazwa ikony'}
    ]
});