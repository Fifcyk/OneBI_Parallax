orion.addEntity('pracaOpis', {
    title: {
        type: String,
        label: 'Tytuł',
        optional:false
    },
    body:orion.attribute('froala',{
        label:'Opis'
    }),
    body2:orion.attribute('froala',{
        label:'Opis2'
    })

}, {
    icon: 'bookmark',
    sidebarName: 'Praca Opis',
    pluralName: 'Praca Opis',
    singularName: 'praca',
    tableColumns: [
        {data:'title',title:'Tytuł'},
        {data:'body',title:'Opis'},
        {data:'body2',title:'Opis2'}

    ]
});