orion.addEntity('headerEN',{
        title: {
            type: String,
            label: 'Title',
            optional:false
        },
        body:orion.attribute('froala',{
            label:'Description'
        })
    },
    {
        icon: 'bookmark',
        sidebarName: 'HeaderEN',
        pluralName: 'HeaderEN',
        singularName: 'HeaderEN',
        tableColumns: [
            {data:'title',title:'Title'},
            {data:'body',title:'Description'}
        ]
    }
);