orion.addEntity('approach',{
    title: {
        type: String,
        label: 'Title',
        optional:false
    },
    body:orion.attribute('froala',{
        label:'Description1'
    }),
    body2:orion.attribute('froala',{
        label:'Description2'
    })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Our approach',
        pluralName: 'Our approach',
        singularName: 'approach',
        tableColumns: [
            {data:'title',title:'Title'},
            {data:'body',title:'Description1'},
            {data:'body2',title:'Description2'}
        ]
    }
);