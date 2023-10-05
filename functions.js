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
    const sorted = clients.sort((a, b) => a[orderBy] - b[orderBy])
    return sorted;
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

