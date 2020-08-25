import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})

export class ContactListComponent implements OnInit {

  contacts: Contact[]
  selectedContact: Contact

  constructor(private contactService: ContactService) { }

  ngOnInit() {
     this.contactService
      .getContacts()
      .then((contacts: Contact[]) => {
        this.contacts = contacts.map((contact) => {
          return contact;
        });
      });
  }

  private getIndexOfContact = (contactId: String) => {
    return this.contacts.findIndex((contact) => {
      return contact._id === contactId;
    });
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact
  }

  createNewContact() {
    var contact: Contact = {
      name: "",
      player: "",
      maxHp: 0,
      armorClass: 0,
      class: "",
      level: 0,
      race: "",
      passives: {
          Perception: 0,
          Investigation: 0,
          Insight: 0
      },
      proficiencies: [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
      ],
      attackAbility: "",
      attackModifier: 0,
      senses: [],
      languages: [
          "",
          "",
          "",
          "",
          "",
          ""
      ],
      resistances: [
          ""
      ],
      savingThrows: {
          STR: 0,
          DEX: 0,
          CON: 0,
          INT: 0,
          WIS: 0,
          CHA: 0
      }
  };

    // By default, a newly-created contact will have the selected state.
    this.selectContact(contact);
  }

  deleteContact = (contactId: String) => {
    var idx = this.getIndexOfContact(contactId);
    if (idx !== -1) {
      this.contacts.splice(idx, 1);
      this.selectContact(null);
    }
    return this.contacts;
  }

  addContact = (contact: Contact) => {
    this.contacts.push(contact);
    this.selectContact(contact);
    return this.contacts;
  }

  updateContact = (contact: Contact) => {
    var idx = this.getIndexOfContact(contact._id);
    if (idx !== -1) {
      this.contacts[idx] = contact;
      this.selectContact(contact);
    }
    return this.contacts;
  }
}