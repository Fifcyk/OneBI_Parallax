orion.addEntity('approach',{
        body:orion.attribute('summernote',{
            label:'Description'
        })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Our approach',
        pluralName: 'Our approach',
        singularName: 'approach',
        tableColumns: [
            {data:'body',title:'Description'}
        ]
    }
);