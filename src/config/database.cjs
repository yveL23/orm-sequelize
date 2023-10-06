module.exports = {
    dialect: "mysql",
    host: "",
    username: "",
    password: "",
    database: "sequelize_node",
    define: {
        timestamps: true,
        underscored: true
    },

User: require("../models/User")
};
