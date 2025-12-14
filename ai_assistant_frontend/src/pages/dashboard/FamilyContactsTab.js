import React, { useState } from 'react';

export default function FamilyContactsTab() {
  const [contacts, setContacts] = useState([
    { name: '', relationship: '', phone: '', email: '', nok: false },
  ]);

  const addContact = () => setContacts([...contacts, { name: '', relationship: '', phone: '', email: '', nok: false }]);
  const removeContact = (idx) => setContacts(contacts.filter((_, i) => i !== idx));

  const update = (idx, field, value) => {
    setContacts(contacts.map((c, i) => i === idx ? { ...c, [field]: value } : c));
  };

  return (
    <div className="vstack">
      <div className="section-title">Family Contacts</div>
      <div className="vstack" style={{ gap: 12 }}>
        {contacts.map((c, idx) => (
          <div key={idx} className="card">
            <div className="grid-2">
              <div>
                <label>Name</label>
                <input className="input" value={c.name} onChange={e => update(idx, 'name', e.target.value)} placeholder="Name" />
              </div>
              <div>
                <label>Relationship</label>
                <input className="input" value={c.relationship} onChange={e => update(idx, 'relationship', e.target.value)} placeholder="Relationship" />
              </div>
              <div>
                <label>Phone Number</label>
                <input className="input" value={c.phone} onChange={e => update(idx, 'phone', e.target.value)} placeholder="Phone Number" />
              </div>
              <div>
                <label>Email Address</label>
                <input className="input" value={c.email} onChange={e => update(idx, 'email', e.target.value)} placeholder="Email Address" />
              </div>
            </div>
            <label className="hstack" style={{ gap: 8, marginTop: 8 }}>
              <input type="checkbox" checked={c.nok} onChange={(e) => update(idx, 'nok', e.target.checked)} />
              <span>Mark as Next of Kin</span>
            </label>
            <div className="hstack" style={{ justifyContent: 'flex-end', marginTop: 8 }}>
              <button className="btn ghost" onClick={() => removeContact(idx)}>Remove Contact</button>
            </div>
          </div>
        ))}
        <div className="hstack" style={{ justifyContent: 'flex-end' }}>
          <button className="btn" onClick={addContact}>Add Contact</button>
        </div>
      </div>
    </div>
  );
}
