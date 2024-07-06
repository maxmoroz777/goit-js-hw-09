const formData = {
    email: "",
    message: "",
};

const mainForm = document.querySelector(".feedback-form");

mainForm.addEventListener("input", evt => { 
    evt.preventDefault();

    if (evt.target.name === "email") {
        formData.email = evt.target.value.trim();
    }

    if (evt.target.name === "message") {
        formData.message = evt.target.value.trim();
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const emailInput = document.getElementsByName("email");
const messageInput = document.getElementsByName("message");
const localStorageData = localStorage.getItem("feedback-form-state");

const fillForm = () => {
    if (localStorageData) {
        const parseData = JSON.parse(localStorageData);
        formData.email = parseData.email;
        formData.message = parseData.message;
        emailInput[0].value = formData.email;
        messageInput[0].value = formData.message;
    }
}

fillForm();

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    mainForm.reset();
});
