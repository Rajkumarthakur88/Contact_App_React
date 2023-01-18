import React, { useContext, useState, useEffect } from 'react'
import GlobalContext from '../Context/GlobalContext'


export const saveContact = (Contact) => {
    return Contact
}
export const DeleteContact = (id) => {
    return id
}

export const EditContact = (contact) => {
    return contact
}
export const UpdateContact = (id, name, Mob, isType) => {
    const UpdateContact = {
        id: id,
        name: name,
        Mob: Mob,
        isType: isType
    }
    return UpdateContact
}
export const FilterContact = (value) => {
    return value
}