// Juuso Nousiainen, 1751514

var userHandler = {

    // this function adds the user to database
    addUser: function (username, password) {

        let userid = "" + username + password
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into user(_id, username, password) values(?, ?, ?)",
                    [userid, username, password],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add user error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },

    // retrieve user info from database
    getUser: function (userid) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "SELECT * from user WHERE _id = ?",
                    [userid],
                    function (tx, results) {
                        if (results.rows.length === 1) {
                            // we want to set the user as logged in and open page1
                            window.localStorage.setItem("user", results.rows[0].username);
                            openPage('page1')
                        }
                    },
                    function (tx, error) {
                        console.log("get user error:", error)
                    }
                );
            },
            function (error) { },
            function () { }
        )
    }
}