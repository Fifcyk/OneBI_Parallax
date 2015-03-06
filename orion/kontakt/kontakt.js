orion.addEntity('kontakt',{
        body:orion.attribute('summernote',{
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