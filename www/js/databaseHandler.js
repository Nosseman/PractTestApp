// Juuso Nousiainen, 1751514

// a function used to interact with the database
var databaseHandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase(
            "users.db",
            "1.0",
            "UserManager",
            1000000);
        this.db.transaction(
            function (tx) {
                tx.executeSql(
                    "create table if not exists user(_id int primary key, username text, password text)",
                    [],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("error while creating the table: " + error.message);
                    }
                );
            }, // catching errors
            function (error) {
                console.log("transaction error:" + error.message);
            },
            function () {
                console.log("create DB transaction completed successfully:");
            },
        );
    }
}
