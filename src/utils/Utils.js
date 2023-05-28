const bcrypt =  require('bcryptjs')

exports.passwordEncoded = (password)=>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt);
}


