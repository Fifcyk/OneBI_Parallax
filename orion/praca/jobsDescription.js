orion.addEntity('jobsDescription', {
    title: {
        type: String,
        label: 'Title',
        optional:false
    },
    body:orion.attribute('froala',{
        label:'Description'
    }),
    body2:orion.attribute('froala',{
        label:'Description2'
    })
}, {
    icon: 'bookmark',
    sidebarName: 'Jobs Description',
    pluralName: 'Jobs Description',
    singularName: 'job',
    tableColumns: [
        {data:'title',title:'Title'},
        {data:'body',title:'Description'},
        {data:'body2',title:'Description2'}
    ]
});