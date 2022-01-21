
module.exports = (sequelize ,DataTypes)=> {
    const Dep = sequelize.define(
        'Dep',
        {
            name:{ type:DataTypes.STRING},
                description: {type: DataTypes.STRING}
        },
        {
            freezeTebleName: true,
        }
    );
    Dep.associate = models => {
        Dep.hasMany(models.User);
    };
 return Dep 
};
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Dep extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
    
//     // static associate(models) {
//     //     Dep.hasMany(models.Dep, {
//     //         onDelete: "CASCADE",
//     //     });
//     //   // define association here
//     // }
//   };
//   Dep.init({
//     name: DataTypes.STRING,
//     description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Dep',
//   });
//   return Dep;
// };
// module.exports = dep;