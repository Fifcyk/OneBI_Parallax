/**
 * Created by marzena on 04.03.15.
 */
/*orion.addEntity('praca', {

        title: {
            type: String,
            label: 'Tytuł'
        },
        body:orion.attribute('froala',{
            label:'Treść',
            optional:true
        }),

        items: {
            type: Array,
            optional: true,
            minCount: 0,
            label:'Stanowisko'
        },
        "items.$": {
            type: Object
        },
        "items.$.name": {
            type: String,
            label:'Nazwa stanowiska'
        },
        "items.$.body": {
            type: String,
            label:'Opis stanowiska'
        }
    }
); */
/*orion.addEntity('praca', {

        title: {
            type: String,
            label: 'Tytuł'
        },
        body:orion.attribute('summernote',{
            label:'Treść',
            optional:true
        }),

        items: {
            type: Array,
            optional: true,
            label:'Stanowisko'
        },
        "items.$": {
            type: Object
        },
        "items.$.name": {
            type: String,
            label:'Nazwa stanowiska'
        },
        "items.$.bodyItem": orion.attribute('summernote',{
            label:'Opis stanowiska',
            optional:true
        })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Praca',
        pluralName: 'Praca',
        singularName: 'Pozycje',
        tableColumns: [
            { data:'title', title: 'Tytuł' },
            {data:'body',title:'Treść'}
        ]
    }
);*/
orion.addEntity('praca', {

    title: {
        type: String,
        label: 'Stanowisko',
        optional: false
    },
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
                {data:'body',title:'Treść'}
            ]
        }
);