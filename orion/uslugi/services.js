orion.addEntity('services', {
    body:orion.attribute('froala',{
        label:'Description'
    })
}, {
    icon: 'bookmark',
    sidebarName: 'Services',
    pluralName: 'Services',
    singularName: 'service',
    tableColumns: [
        {data:'body',title:'Title'}
    ]
});