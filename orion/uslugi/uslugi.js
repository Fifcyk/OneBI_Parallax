/**
 * Created by marzena on 04.03.15.
 */
orion.addEntity('uslugi', {
    title: {
        type: String,
        label: "Tytuł"
    },
    body:orion.attribute('froala',{
        label:'Treść',
        optional:true
    })
}, {
    icon: 'bookmark',
    sidebarName: 'Usługi',
    pluralName: 'Usługi',
    singularName: 'Usługa',
    tableColumns: [
        { data:'title', title: 'Tytuł' },
        {data:'body',title:'Treść'}
    ]
});