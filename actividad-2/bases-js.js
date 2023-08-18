const getDataForm = () => {
    const txtName = document.getElementById("txtName").value;
    const txtEmail = document.getElementById("txtEmail").value;
    const txtTask = document.getElementById("txtTask").value;
    const acceptConditions = document.getElementById("acceptConditions").checked
    const actividadType = document.getElementById("actividadType")
    const tareaType = document.getElementById("tareaType")

    const data = {
        name:txtName,
        email:txtEmail,
        description:txtTask,
        acceptConditions:acceptConditions,
        actividadType,
        tareaType
    }
    console.log(data)
}