import React from 'react'

const Additemsfetchitems = () => {
    const addItems = () => {
        localStorage.setItem('arr', JSON.stringify([1, 2, 3, 4, 5]));
        localStorage.setItem('obj', JSON.stringify({ name: 'name1', address: 'adress1' }));
    }

    const fetchItems = () => {
        // let a =  localStorage.getItem(('arr'));
        console.log(JSON.parse(localStorage.getItem(('obj'))));
    }


    let a = 5;
    let b = 10;
    a = b;
    b = a;
    console.log(a + "" + b);

    return (
        <div>
            <button onClick={addItems}>Add Data</button>
            <button onClick={fetchItems}>Fetch Data</button>
        </div>
    )
}

export default Additemsfetchitems;
