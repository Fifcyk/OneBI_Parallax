orion.addEntity('contact',{
        body:orion.attribute('summernote',{
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