orion.addEntity('partners', {

        title: {
            type: String,
            label: 'Partner',
            optional:false
        },
        body:orion.attribute('summernote',{
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