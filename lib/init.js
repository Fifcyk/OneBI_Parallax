/**
 * Created by Fifcyk on 07.04.15.
 */
var imageStore = new FS.Store.GridFS('images');

Images = new FS.Collection('images', {
    stores: [imageStore]
});


//var Images = new FS.Collection('images', {
//    stores: [new FS.Store.FileSystem('images', {path: './'})]
//});

Images.deny({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    },
    download: function(){
        return false;
    }
});

Images.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
    download: function(){
        return true;
    }
});

orion.filesystem.providerUpload = function(options, success, failure) {
    var file = options.fileList;
    //for (var i = 0, ln = files.length; i < ln; i++) {
    //    Images.insert(files[0], function (err, fileObj) {
    //        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    //        console.log(files[0]);
    //        if(err)
    //        {
    //            console.log('błąd podczas ładowania pliku' + err);
    //            return failure(err);
    //        }
    //        else
    //        {
    //            console.log(fileObj);
    //            return success(fileObj.collection.primaryStore.path + fileObj.original.name);
    //        }
    //    });

    FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
            if (err) {
                // handle error
            } else {
                // handle success depending what you need to do
                //var userId = Meteor.userId();
                var imagesURL = {
                    'image': '/cfs/files/images/' + fileObj._id
                };
                console.log(imagesURL);
                return success(imagesURL.image);
                //Meteor.users.update(userId, {$set: imagesURL});
            }
        });
    });

}