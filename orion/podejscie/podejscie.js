orion.addEntity('podejscie',{
    title: {
        type: String,
        label: 'Tytuł',
        optional:false
    },
    body:orion.attribute('froala',{
        label:'Treść1'
    }),
    body2: orion.attribute('froala',{
        label:'Treść2'
    })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Podejście',
        pluralName: 'Podejście',
        singularName: 'podejście',
        tableColumns: [
            {data:'body',title:'Treść1'},
            {data:'body2',title:'Treść2'},
            {data:'title',title:'Tytuł'}
        ]
    }
);