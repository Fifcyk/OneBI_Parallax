orion.addEntity('aktualnosci', {
    title: {
        type: String,
        label: 'Tytuł',
        optional:false
    },
    image: orion.attribute('file', {
        label: 'Grafika',
        optional: true
    }),
    bodyShort:orion.attribute('froala',{
        label:'Krótka treść',
        optional:true
    }),
    body:orion.attribute('froala',{
        label:'Treść',
        optional:true
    })
}, {
    icon: 'bookmark',
    sidebarName: 'Aktualności',
    pluralName: 'Aktualności',
    singularName: 'pozycja aktualności',
    tableColumns: [
        { data:'title', title: 'Tytuł' },
        {data:'bodyShort',title:'Krótka treść'},
        orion.attributeColumn('file', 'image', 'Grafika'),
    ]
});
