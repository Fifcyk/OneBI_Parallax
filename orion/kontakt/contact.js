orion.addEntity('contact',{
        body:orion.attribute('froala',{
            label:'Body',
            optional:false
        })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Contact',
        pluralName: 'Contact',
        singularName: 'contact',
        tableColumns: [
            { data:'body', title: 'Contact' },
        ]
    }
);