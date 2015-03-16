orion.addEntity('services', {
    body:orion.attribute('summernote',{
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