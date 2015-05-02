orion.addEntity('partnersDescription',{
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
        sidebarName: 'Partners Description',
        pluralName: 'Partners Description',
        singularName: 'Partners Description',
        tableColumns: [
            {data:'title',title:'Title'},
            {data:'body',title:'Description'}
        ]
    }
);