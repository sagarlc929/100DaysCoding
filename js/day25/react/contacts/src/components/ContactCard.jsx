import { IoMdCall } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
function ContactCard({ name, contactNo, address }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const toggleExpanded = () => {
		setIsExpanded(!isExpanded);
	}
	return (
		<div  className="bg-white text-gray-700 m-3 rounded-md flex items-center cursor-pointer justify-between p-3 transition-all ease-linear duration-1000">
			<div onClick={toggleExpanded} >
				<p className={`text-left ${!isExpanded? 'text-3xl font-bold': '' }`}>
					<b>{isExpanded? 'Name:': ''}</b> {name}
				</p>
				{isExpanded && (
				<><p className="text-left">
						<b>Contact No:</b> {contactNo}
					</p><p className="text-left">
							<b>Address:</b> {address}
						</p></>
					)
				}

			</div>
			<div
				className="flex justify-between items-center rounded-md p-2"
			>
				<ButtonWithIcon icon={<IoMdCall size="28" />} color="hover:bg-green-600"  text="call"  />
        <ButtonWithIcon icon={<MdOutlineEdit size="28" />} color="hover:bg-yellow-600" text="edit" />
        <ButtonWithIcon icon={<MdDeleteOutline size="28" />} color="hover:bg-red-600" text="delete" />
			</div>
		</div>
	);
}

const ButtonWithIcon = ({ icon, text, color }) => (
	<div className={`group flex justify-center items-center
    h-12 w-12 m-1
  ${color} hover:text-white
    rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear
     bg-gray-300`}>
		{icon}
		<span className=" absolute mb-20 px-2 text-x text-white bg-black
    rounded  opacity-0 group-hover:opacity-100
    transition-opacity duration-300 ">{text}</span>
	</div>
);

export default ContactCard;
