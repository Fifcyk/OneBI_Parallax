/**
 * Created by Fifcyk on 26.03.15.
 */
Meteor.startup(function () {
    var data = [
        {
            "Login": "administrator",
            "Email": "admin@onebi.eu"
        }];
    if((Meteor.users.find().count() == 0)) {
        var users = [];
        for (var i = 0; i < data.length; i++) {
            users.push({
                    login: data[i].Login,
                    email: data[i].Email
                }
            );
        }
        _.each(users, function (user) {
            var id;

            id = Accounts.createUser({
                username: user.login,
                email: user.email,
                password: "ONEBImeteor"
            });

        });
    }
});