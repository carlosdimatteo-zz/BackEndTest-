const config = require('./config')
const pgp = require('pg-promise')()
const db = pgp(config.url)
const queries = require('./../helpers/queries')

module.exports.db = db


module.exports.dbOps = {
    registerOps:{
            register : (userInfo)=>{
                return new Promise((resolve,reject)=>{
                    db.any(queries.registerQueries.validateEmail,[userInfo.email]).then((data)=>{
                        if(data.length>0){
                            reject('email already registered')
                        }else{
                            db.one(queries.registerQueries.register,[userInfo.email,userInfo.name,userInfo.lastname,userInfo.phone,userInfo.address]).then((data)=>{
                                console.log('registered user and retrieved id from database ',data)
                                resolve(data)
                            }).catch((err)=>{
                                console.log('could not retrieve from database ',err)
                                reject(err)
                            })
                        }
                    })
                    
                })
            }
    },
    infoOps:{

        addInterests: (userInfo)=>{
            return new Promise((resolve,reject)=>{
                db.none(queries.userInfoQueries.addInterests ,[userInfo.id,userInfo.art,userInfo.cinema,userInfo.music]).then((data)=>{
                    console.log('added user interests ',data)
                    resolve(true)
                }).catch((err)=>{
                    console.log('could not retrieve from database ',err)
                    reject(err)
                })
            })
        },

        userInfo:(userId)=>{
            return new Promise((resolve,reject)=>{
                db.one(queries.userInfoQueries.userInfo ,[userId]).then((data)=>{
                    console.log('retrieved user info ',data)
                    resolve(data)
                }).catch((err)=>{
                    console.log('could not retrieve from database ',err)
                    reject(err)
                })
            })
        },

        updateInfo:(userInfo)=>{
            return new Promise((resolve,reject)=>{
            db.none(queries.userInfoQueries.updateInfo ,[userInfo.name,userInfo.lastname,userInfo.phone,userInfo.address,userInfo.id]).then((data)=>{
                console.log('updated user info ')
                resolve(true)
            }).catch((err)=>{
                console.log('could not update in database ',err)
                reject(err)
            })
        })
        },

        updateInterests:(userInfo)=>{
            return new Promise((resolve,reject)=>{
                db.none(queries.userInfoQueries.updateInterests ,[userInfo.art,userInfo.cinema,userInfo.music,userInfo.id]).then((data)=>{
                    console.log('updated user info ')
                    resolve(true)
                }).catch((err)=>{
                    console.log('could not update in database ',err)
                    reject(err)
                })
            })
        },
            
        removeUser:(userId)=>{
            return new Promise((resolve,reject)=>{
                console.log('trying to add song to  playlist  ')
                db.tx(transaction=>{
                    const q1 = transaction.none(queries.userInfoQueries.removeInterests,[userId])
                    const q2 = transaction.none(queries.userInfoQueries.removeUser,[userId])
                    return transaction.batch([q1,q2])
                }).then(()=>{
                    console.log('succesfully deleted user from database ')
                    resolve(true)
                }).catch((err)=>{
                    console.log('could not delete user from database ',err)
                    reject(err)
                })
            })
        },



    },
    searchOps:{
        searchuserInfoByEmail:(userEmail)=>{
            return new Promise((resolve,reject)=>{
                db.any(queries.searchQueries.searchUserInfoByEmail ,[userEmail]).then((data)=>{
                    console.log('retrieved user info ',data)
                    if(data.length>0){
                        resolve(data)
                    }else{
                        reject('user not found')
                    }
                }).catch((err)=>{
                    console.log('could not retrieve from database ',err)
                    reject(err)
                })
            })
        },
        searchuserInfoByName:(userName)=>{
            return new Promise((resolve,reject)=>{
                db.any(queries.searchQueries.searchUserInfoByName ,[userName]).then((data)=>{
                    console.log('retrieved user info ',data)
                    if(data.length>0){
                        resolve(data)
                    }else{
                        reject('user not found')
                    }
                }).catch((err)=>{
                    console.log('could not retrieve from database ',err)
                    reject(err)
                })
            })
        }
    }
}