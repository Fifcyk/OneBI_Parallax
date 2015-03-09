/**
 * Created by marzena on 04.03.15.
 */
orion.addEntity('podejscie',{
    body:orion.attribute('summernote',{
        label:'Treść'
    })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Podejście',
        pluralName: 'Podejście',
        singularName: 'podejście',
        tableColumns: [
            {data:'body',title:'Treść'}
        ]
    }
);