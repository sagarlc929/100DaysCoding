import './App.css'
import ContactCard from './components/ContactCard'

function App() {

  const contacts = [
		{
			name: "Asim",
			contactNo: "9887656765",
			address: "Kathmandu",
		},
    {
			name: "Hari",
			contact: "988977989",
			address: "Butwal",
		}
];

  return (
		<>
			<button className="bg-green-600 rounded-xl p-2" id="add">
				Add
			</button>
      {contacts.map((contact) =>(
        <ContactCard
          name={contact.name}
          contactNo={contact.contactNo}
          address={contact.address}
        />

      ))}
		</>
  );
}

export default App
