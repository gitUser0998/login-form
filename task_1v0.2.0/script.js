var auth = [{ login: "test1", pass: "test1234" }, { login: "test2", pass: "test9876" }];

function Authenticate() {
    let login_entry = document.getElementById("username").value;
    let pass_entry = document.getElementById("password").value;

    auth.forEach(p => {
        if ((p.login == login_entry) && (p.pass == pass_entry))
            alert("success")
    })
}