orion.addEntity('kontakt',{
        body:orion.attribute('froala',{
            label:'Treść',
            optional:false
        })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Kontakt',
        pluralName: 'Kontakt',
        singularName: 'Kontakt',
        tableColumns: [
            { data:'body', title: 'Treść' },
        ]
    }
);