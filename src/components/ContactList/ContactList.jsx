import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }

    return (<div className={css.wraperContactList}>
        <ul className={css.contactList}>
            {getVisibleContacts().map((contact, index) => (
                <li key={index} className={css.contactListItem}>
                    {contact.name}: {contact.number}
                    <button type='button' className={css.contactListItemBtn}
                        onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
                </li>
            ))}
        </ul>
    </div>)
}