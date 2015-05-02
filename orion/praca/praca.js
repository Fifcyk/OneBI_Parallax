/**
 * Created by marzena on 04.03.15.
 */
orion.addEntity('praca', {

    title: {
        type: String,
        label: 'Stanowisko',
        optional: false
    },
        bodyShort:orion.attribute('froala',{
            label:'Treść Krótka',
            optional:true
        }),
        body:orion.attribute('froala',{
            label:'Treść',
            optional:true
        })},


        {
            icon: 'bookmark',
            sidebarName: 'Praca',
            pluralName: 'Praca',
            singularName: 'pozycję',
            tableColumns: [
                { data:'title', title: 'Stanowisko' },
                {data:'bodyShort',title:'Treść'}
            ]
        }
);