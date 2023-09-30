import {
	CakeIcon,
	DevicePhoneMobileIcon,
	EnvelopeIcon,
	MapPinIcon
} from "@heroicons/react/24/solid";

const Contacts = () => {
	return (
		<>
			<div className="w-2/6 m-auto rounded overflow-hidden shadow-lg bg-zinc-900 flex flex-row justify-center items-center">
				<div className="grid grid-cols-1">
					<div className="flex gap-3 m-5 items-center">
						<DevicePhoneMobileIcon className="h-12 w-12 text-zinc-300" />
						<p className="font-bold">
							{import.meta.env.VITE_PHONE_NUMBER}
						</p>
					</div>
					<div className="flex gap-3 m-5 items-center">
						<EnvelopeIcon className="h-12 w-12 text-zinc-300" />
						<p className="font-bold">
							{import.meta.env.VITE_EMAIL}
						</p>
					</div>
					<div className="flex gap-3 m-5 items-center">
						<MapPinIcon className="h-12 w-12 text-zinc-300" />
						<p className="font-bold">
							{import.meta.env.VITE_LOCATION}
						</p>
					</div>
					<div className="flex gap-3 m-5 items-center">
						<CakeIcon className="h-12 w-12 text-zinc-300" />
						<p className="font-bold">
							{import.meta.env.VITE_BIRTH}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
