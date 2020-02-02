'use strict'

const Hash = use('Hash')
const Customer = use('App/Models/Customer')

const UserHook = exports = module.exports = {}

UserHook.hashPassword = async (userInstance) => {
    if (userInstance.dirty.password) {
      userInstance.password = await Hash.make(userInstance.password)
    }
}

UserHook.setCustomer = async (userInstance) => {
    let customer = new Customer()
    userInstance.customer().save(customer)
}
