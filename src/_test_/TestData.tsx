export let offers = [
    { 
        orderId : 1,
        clientId: 1,
        itemId : 2,
        quantity : 10,
        materialId : 6,
        unitId : 3,
        hsn : 5,
        rate : 300,
        orderStatus:'Pending',
        
    },

    { 
        orderId : 2,
        clientId: 2,
        itemId : 2,
        quantity : 10,
        materialId : 6,
        unitId : 3,
        hsn : 5,
        rate : 300,
        orderStatus:'Active',
        
    },
    
    { 
        orderId : 2,
        clientId: 1,
        itemId : 2,
        quantity : 10,
        materialId : 6,
        unitId : 3,
        hsn : 5,
        rate : 300,
        orderStatus:'Complete',
        
    },
]

export let clients = [
    {
        clientId : 1,
        name : 'Tesla Inc.',
    },
    {
        clientId : 2,
        name : 'Boston Dynamics',
    },
    {
        clientId : 3,
        name : 'ASML Holdings',
    },
]

export let materials = [
    {
        materialId : 1,
        name : 'Aluminium',
    },
    {
        materialId : 2,
        name : 'SAE 302B',
    },
    {
        materialId : 3,
        name : 'SAE 4140',
    },

]

export let items = [
    {
        itemId : 1,
        name : 'item',
    },

]

export let units = [
    {
        unitId : 1,
        name : 'unit',
    },

]

export let hsns = [
    {
        hsnId : 1,
        name : '12727346',
    },

]

// customer name - drop-down (with search)
// item-name - dd
//quantity - text input
//material - dd
//unit - dd
//hsn - sdd
//rate - text input