/**
 * Created by marzena on 04.03.15.
 */
orion.addEntity('podejscie',{
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
        sidebarName: 'Podejście',
        pluralName: 'Podejście',
        singularName: 'podejście',
        tableColumns: [
            {data:'body',title:'Treść'},
            {data:'title',title:'Tytuł'}
        ]
    }
);