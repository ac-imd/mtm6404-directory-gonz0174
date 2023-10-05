const root = ReactDOM.createRoot(document.getElementById('root'));

function list(clients) {
    const listItem = clients.map(client => (
        `<li class="list-group-item d-flex justify-content-between" data-index=${client.index}> ${client.name}
        <strong>$ ${client.balance}</strong>
        </li>`
    ))

    const listItemReturn = listItem.join('')
    return listItemReturn;
}

function order(clients, orderBy) {
    // Sorting by the index
    const sorted = clients.sort((a, b) => a[orderBy.index] - b[orderBy.index])

    // Sorting by the balance
    const sortedBalance = clients.sort((a, b) => a[orderBy.balance] - b[orderBy.balance])

    // Sorting by name, making new items A and B so they can be sort by the name
    clients.sort((a, b) => {
        const itemA = a[orderBy.toLowerCase()];
        const itemB = b[orderBy.toLowerCase()];
  
        if (itemA < itemB) return -1;
        if (itemA > itemB) return 1;
        return 0;
    });
    return sorted, sortedBalance;
}

function total(clients) {
    const balanceTotal = clients.reduce((balanceSum, numberSum) => {
        return balanceSum += numberSum.balance;
    }, 0)
    
    return balanceTotal;
}

function info(desiredIndex) {
    const infoFind = clients.find((client) => client.index === desiredIndex)
    return infoFind;
}

function search(nameClient) {
    const nameSearch = clients.filter((client) => client.name.toLowerCase().includes(nameClient) )
    return nameSearch;
}

