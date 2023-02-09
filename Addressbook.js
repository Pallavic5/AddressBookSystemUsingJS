/*Problem Statement UC4: Ability to find existing contact person using their name and edit*/

class ContactDetails {
    /**
     * Pojo Class
     */
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    /**
     *parameterized constructor
     */
    ContactDetails(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    /**
     * default constructor
     */
    ContactDetails() {

    }
    /**
     *toString method
     */
    toString() {
        return "First Name : " + this.firstName + "Last Name : " + this.lastName + "Address : " + this.address + "City : " + this.city + "State : " + this.state + "zip code : " + this.zip + "Phone Number : " + this.phoneNumber + "email : " + this.email;
    }
}

/**
 * Create Array and ContactDetails Objects
 */
contactList = new Array();
contact = new ContactDetails();
function addDetails() {
    /**
     * Adding contact details to addressbook
     */
    contact.firstName = firstName('first name');
    contact.lastName = firstName('last name');
    contact.address = address('Address');
    contact.city = address('city');
    contact.state = address('State');
    contact.zip = zip();
    contact.phoneNumber = phoneNumber();
    contact.email = email();
    contactList.push(contact)
}
function printDetails() {
    /**
     * Display contact details
     */
    console.log(contactList);
}
function firstName(value) {
    /**
     * validation apply on details(first name and last name)
     */
    let pattern = new RegExp('^[A-Z]{1}[a-z]{2,20}$');
    let input;
    while (true) {
        input = prompt("Enter " + value + " (first letter is upper case)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function address(value) {
    /**
     * validation apply on details(address, city and state)
     */
    let pattern = new RegExp('^[A-Z]{1}[a-z]{3,20}$');
    let input;
    while (true) {
        input = prompt("Enter " + value + " (first letter is upper case)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function zip() {
    /**
     * validation apply on details( zip code)
     */
    let pattern = new RegExp('^[0-9]{6}$');
    let input;
    while (true) {
        input = prompt("Enter zip code (Enter 6 numbers)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function phoneNumber() {
    /**
     * validation apply on details(mobile number)
     */
    let pattern = new RegExp('^[7-9]{1}[0-9]{9}$');
    let input;
    while (true) {
        input = prompt("Enter Mobile Number (Enter 9 numbers)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function email() {
    /**
     * validation apply on details(email)
     */
    let pattern = new RegExp('^[A-Za-z]{3,20}[0-9]{0,10}[@]{1}[gmail.com]{9}$');
    let input;
    while (true) {
        input = prompt("Enter email ");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}

/**
 * Create Array and ContactDetails Objects
 */
contactList = new Array();
function addContactDetails() {
    /**
     * create method for ability to add contact details to address book
     */
    contact = new ContactDetails();
    contact.firstName = firstName('first name');
    contact.lastName = firstName('last name');
    contact.address = address('Address');
    contact.city = address('city');
    contact.state = address('State');
    contact.zip = zip();
    contact.phoneNumber = phoneNumber();
    contact.email = email();
    contactList.push(contact)
}
function printContactDetails() {
    /**
     * create method for print the Address book contact details
     */
    console.log(contactList);
}
function editContactDetails() {
    /**
     * create method for edit the existing contact details
     */
    let input = prompt("Enter first name");
    let status = true;
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].firstName == input) {
            contactList.splice(i, 1);
            status = false;
            break;
        }
    }
    if (status == true) {
        console.log(input + " details not found");
    }
    else {
        addContactDetails();
    }

}