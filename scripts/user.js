const casual = require ('casual')

module.exports = () => {

    const data = {
        users:[]
    }

    for (let i = 0; i<50; i++){

        data.users.push({
            "id": casual.uuid,
            "name": casual.name,
            "lastName": casual.last_name
        })
    }

    return data
}