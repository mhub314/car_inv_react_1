const token = 'ff03d9b69141f3079a22c4768977444dd4e4e45af85aa8f1'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-collection-26zv.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
}