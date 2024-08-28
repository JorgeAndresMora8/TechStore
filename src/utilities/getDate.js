

export const getDate = () => { 
    const currentDate = new Date();
    const localDate = currentDate.toLocaleDateString();

    return localDate
}