orion.addEntity('jobs', {

        title: {
            type: String,
            label: 'Job position',
            optional: false
        },
        bodyShort:orion.attribute('froala',{
            label:'Short Description',
            optional:true
        }),
        body:orion.attribute('froala',{
            label:'Description',
            optional:true
        })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Jobs',
        pluralName: 'Jobs',
        singularName: 'position',
        tableColumns: [
            { data:'title', title: 'Job position' },
            {data:'bodyShort',title:'Description'}
        ]
    }
);