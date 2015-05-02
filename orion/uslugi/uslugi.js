orion.addEntity('uslugi', {
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
    sidebarName: 'Usługi',
    pluralName: 'Usługi',
    singularName: 'usługa',
    tableColumns: [
        {data:'title',title:'Tytuł'},
        {data:'body',title:'Opis'},
        {data:'body2',title:'Opis2'}

    ]
});