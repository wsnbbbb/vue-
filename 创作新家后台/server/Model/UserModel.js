const Database=require('./Database')
class UserModel extends Database{
    constructor(){
        super();
    }
    //登录操作
    login(username,password,callback){
      console.log(username,password);
      let sql=`select * from user where username='${username}'`;
      this.mydb.query(sql,callback)
    }
}
module.exports=UserModel;