orion.addEntity('news', {
    title: {
        type: String,
        label: 'Title',
        optional:false
    },
    image: orion.attribute('file', {
        label: 'Image',
        optional: true
    }),
    bodyShort:orion.attribute('froala',{
        label:'Short Description',
        optional:true
    }),
    body:orion.attribute('froala',{
        label:'Body',
        optional:true
    })
}, {
    icon: 'bookmark',
    sidebarName: 'News',
    pluralName: 'News',
    singularName: 'news',
    tableColumns: [
        { data:'title', title: 'Title' },
        {data:'bodyShort',title:'Body'},
        orion.attributeColumn('file', 'image', 'Image'),
    ]
});
