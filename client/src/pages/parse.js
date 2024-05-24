export default function parse(data){
    const objects = data.slice(1, -1).split("},{");

// Initialize an empty array to store JSON objects
const result = [];

// Process each object
objects.forEach(obj => {
    // Remove curly braces
    obj = obj.replace("{", "").replace("}", "");
    // Split by commas
    const values = obj.split(",");
    // Create a JSON object with keys and values
    const jsonObject = {
        approved: values[0] === "true",
        name: values[3],
        location: values[2],
        phone: values[4],
        price: values[5],
        type:values[6],
        numberOfRooms:values[7],
        id:values[1]
       
    };
    // Push the JSON object to the result array
    result.push(jsonObject);
});
return result;
}