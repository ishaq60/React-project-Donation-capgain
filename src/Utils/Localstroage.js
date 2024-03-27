
export const savetolocalStorage = (data) => {
    // Retrieve data from local storage
    const saveData = JSON.parse(localStorage.getItem("donation") || '[]'); // Use '[]' as default value if no data is found

    // Check if data with the same ID already exists
    const existedData = saveData.find(item => item.data === data.id);

    if (!existedData) {
        // If data doesn't exist, add it to the array and update local storage
        saveData.push(data);
        localStorage.setItem("donation", JSON.stringify(saveData));
        alert("Added successfully to local storage.");
    } else {
        // If data already exists, notify the user
        alert("Data already existjk.");
    }
};
export const getFromLocalstorage=()=>{
    const data=JSON.parse(localStorage.getItem("donation"))|| [];
    return data;
}
