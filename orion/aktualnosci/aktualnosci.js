/**
 * Created by marzena on 04.03.15.
 */

  /*  { items: {
           type: Array,
           optional: true,
           minCount: 0,
           label: 'Pozycje aktualności'
       },
       "items.$": {
           type: Object
       },
       "items.$.name": {
           type: String,
           label:'Nazwa'
       },
       "items.$.body":orion.attribute('froala',{
           label:'Treść',
           optional:true
       })

);*/

orion.addEntity('aktualnosci', {
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
    sidebarName: 'Aktualności',
    pluralName: 'Aktualności',
    singularName: 'Pozycja aktulaności',
    tableColumns: [
        { data:'title', title: 'Tytuł' },
        {data:'body',title:'Treść'}
    ]
});
