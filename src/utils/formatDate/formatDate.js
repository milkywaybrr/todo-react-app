const formatDate = (date) => {

    date = new Date(date);

    const year = date.getFullYear(); // 2023
    const month = date.getMonth() + 1; // 1
    const day = date.getDate(); // 6

    const hours = date.getHours(); // 14
    const minutes = date.getMinutes(); // 2

    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} (${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes})`;
}

export default formatDate;