const bcrypt =  require('bcryptjs')

exports.passwordEncoded = (password)=>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt);
}


exports.comparePassword = (oldPass,newPass)=>{
    return bcrypt.compareSync(newPass,oldPass)
                            // bfidhgfigdsigiusfyuhfufurgiurhgiur,12345
}

