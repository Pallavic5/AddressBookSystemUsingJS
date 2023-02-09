/*Problem Statement UC1 :  Ability to create a Address Book
Contact with first and last names,
address, city, state, zip, phone number
and email...
- Program is written using IDE like VSS Code
- Every UC is in a separate Git Branch and then merged with main
- Naming Convention, Indentation, etc Code Hygiene will be checked during
Review
- Git Check In Comments and Version History will be monitored*/

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