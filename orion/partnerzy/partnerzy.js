orion.addEntity('partnerzy', {

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
            label:'Partnerzy'
        },
        "items.$": {
            type: Object
        },
        "items.$.name": {
            type: String,
            label:'Nazwa partnera',
            optional:false
        },
        "items.$.bodyItem": orion.attribute('summernote',{
            label:'Opis',
            optional:true
        })
    },
    {
        icon: 'bookmark',
        sidebarName: 'Partnerzy',
        pluralName: 'Partnerzy',
        singularName: 'Pozycje',
        tableColumns: [
            { data:'title', title: 'Tytuł' },
            {data:'body',title:'Treść'}
        ]
    }
);

/*TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Partnerzy = new Tabular.Table({
    name: "partnerzy",
    collection: Partnerzy,
    columns: [
        {data: "title", title: "Title"},
        {data: "author", title: "Author"},
        {data: "copies", title: "Copies Available"},
        {
            data: "lastCheckedOut",
            title: "Last Checkout",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).calendar();
                } else {
                    return "Never";
                }
            }
        },
        {data: "summary", title: "Summary"},
        {
            tmpl: Meteor.isClient && Template.bookCheckOutCell
        }
    ]
});*/

