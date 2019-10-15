
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
  });
  User.createUser  = ({fullName,email,password}) => {
        return User.create({fullName, email, password})
          .then(user => console.log("created success"));
  }
  User.getAllUser = () => {
        return User.findAll().then(r => console.log(r));
  }
  User.getUserBy = ({obj}) =>{
        return User.findOne({where : obj}).then(r => console.log(r));
  }
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

