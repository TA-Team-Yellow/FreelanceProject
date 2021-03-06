export class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    companyName: string;
    role: string;
    constructor(username: string, password: string, firstName: string, lastName: string, email: string, country: string, companyName: string, role: string) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.country = country;
        this.companyName = companyName;
        this.role = role;
    }
}
