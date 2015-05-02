orion.addEntity('partnerzyOpis',{
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
        sidebarName: 'Partnerzy Opis',
        pluralName: 'Partnerzy Opis',
        singularName: 'pozycja partnerzy opis',
        tableColumns: [
            {data:'title',title:'Tytuł'},
            {data:'body',title:'Treść'}
        ]
    }
);