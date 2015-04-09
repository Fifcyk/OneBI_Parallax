orion.addEntity('partners', {

        title: {
            type: String,
            label: 'Partner',
            optional:false
        },
        image: orion.attribute('file', {
            label: 'Image',
            optional: true
        }),
        body:orion.attribute('froala',{
            label:'Body',
            optional:true
        })},


    {
        icon: 'bookmark',
        sidebarName: 'Partners',
        pluralName: 'Partners',
        singularName: 'partner',
        tableColumns: [
            { data:'title', title: 'Partner' },
            {data:'body',title:'Body'}
        ]
    }
);