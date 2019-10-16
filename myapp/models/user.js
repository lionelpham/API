
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
  });
  User.createUser  = ({fullName,email,password}) => {
        return User.create({fullName, email, password})
          
  }
  User.getUserCurrent = (email,pass) => {
        return User.findOne({
          where: {email : email} && {password : pass}
        })
  }
  User.getUserBy = ({obj}) =>{
        return User.findOne({where : obj});
  }
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

