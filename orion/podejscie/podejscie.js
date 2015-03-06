/**
 * Created by marzena on 04.03.15.
 */
orion.addEntity('podejscie',{
    title:{
        type:String,
        label:'Tytuł',
        maxCount:1
    },
    body:orion.attribute('summernote',{
        label:'Treść',
        optional:true
    })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Podejście',
        pluralName: 'Podejście',
        singularName: 'Podejście',
        tableColumns: [
            { data:'title', title: 'Tytuł' },
            {data:'body',title:'Treść'}
        ]
    }
);