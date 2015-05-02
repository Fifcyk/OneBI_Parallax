orion.addEntity('header',{
        title: {
            type: String,
            label: 'Tytuł',
            optional:false
        },
        body:orion.attribute('froala',{
            label:'Treść'
        })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Header',
        pluralName: 'Header',
        singularName: 'Header',
        tableColumns: [
            {data:'title',title:'Tytuł'},
            {data:'body',title:'Treść'}
        ]
    }
);