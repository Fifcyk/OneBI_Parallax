orion.addEntity('approach',{

        title: {
            type: String,
            label: 'Title',
            optional:false
        },
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
            {data:'title',title:'Title'},
            {data:'body',title:'Description'}
        ]
    }
);