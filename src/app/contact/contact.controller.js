export class ContactController{
  constructor($scope, ContactService){
    'ngInject';

    this.mail = ContactService.getMail();
    this.phone = ContactService.getPhone();
    this.test = "test";
  }
}
