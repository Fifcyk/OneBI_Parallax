/**
 * Created by marzena on 04.03.15.
 */
orion.addEntity('uslugi', {
    body:orion.attribute('froala',{
        label:'Opis'
    })

}, {
    icon: 'bookmark',
    sidebarName: 'Usługi',
    pluralName: 'Usługi',
    singularName: 'usługa',
    tableColumns: [
        {data:'body',title:'Treść'}

    ]
});