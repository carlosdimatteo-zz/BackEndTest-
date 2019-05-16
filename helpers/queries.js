module.exports ={
    registerQueries:{
        register:'INSERT INTO users(email,name,lastname,phone,address) VALUES($1,$2,$3,$4,$5) RETURNING id',
        validateEmail:'SELECT email FROM users WHERE  email = $1'
    },
    userInfoQueries:{
        userInfo:'SELECT u.*,i.* FROM users u JOIN info i ON u.id=i.id WHERE u.id = $1 ',
        addInterests:'INSERT INTO info(id,art,cinema,music) VALUES ($1,$2,$3,$4)',
        updateInfo:'UPDATE users SET name = $1,lastname = $2 , phone = $3 , address=$4 WHERE id=$5 ',
        updateInterests:'UPDATE info SET art = $1, cinema = $2, music = $3 WHERE id= $4',
        removeUser:'DELETE FROM users WHERE id= $1',
        removeInterests:'DELETE FROM info WHERE id=$1'
    },
    searchQueries:{
            searchUserInfoByEmail:"SELECT u.*,i.art,i.music,i.cinema FROM users u LEFT JOIN info i ON u.id=i.id  WHERE LOWER(email) LIKE LOWER('%$1#%') ",
            searchUserInfoByName:"SELECT u.*,i.art,i.music,i.cinema FROM users u LEFT JOIN info i ON u.id=i.id  WHERE LOWER(name) LIKE LOWER('%$1#%') "
    }
}
