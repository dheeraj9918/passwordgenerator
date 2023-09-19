const posswordBox = document.getElementById("passward");
const length = 16;

const cplatter = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ";
const smlatter = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
const spsymbols = "!\"#$%&'()*+,-./:;<=>?[]";
const allCt = cplatter + smlatter + numeric + spsymbols;


const generatePassword = () => {
    let password = " ";

    password += cplatter[Math.floor(Math.random() * cplatter.length)];
    password += smlatter[Math.floor(Math.random() * smlatter.length)];
    password += numeric[Math.floor(Math.random() * numeric.length)];
    password += spsymbols[Math.floor(Math.random() * spsymbols.length)];
    while (length > password.length) {
        password += allCt[Math.floor(Math.random() * allCt.length)];
    }
    posswordBox.value = password;

}

const copyPassword = () => {
    posswordBox.select();
    document.execCommand("copy");

}
