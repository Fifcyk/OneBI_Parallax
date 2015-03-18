orion.addEntity('jobs', {

        title: {
            type: String,
            label: 'Job position',
            optional: false
        },
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
            {data:'body',title:'Description'}
        ]
    }
);