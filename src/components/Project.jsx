import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Project = ({ project }) => {
	return (
		<div className="w-full lg:w-8/12 2xl:w-10/12 px-3 sm:px-6 py-6 m-auto rounded overflow-hidden shadow-lg bg-zinc-900 h-full">
			<div className="p-3">
				<div className="flex gap-1 items-center">
					<h2 className="font-bold text-xl my-3 flex gap-1">
						<p>{project.name}</p>
					</h2>
					<a href={project.link} target="_blank">
						<GlobeAltIcon className="w-6 text-zinc-300" />
					</a>
					<a href={project.code} target="_blank">
						<CodeBracketIcon className="w-6 text-zinc-300" />
					</a>
				</div>
				<p className="pb-3">{project.descr}</p>
				<div className="my-3">
					<ReactImageGallery
						items={project.img}
						autoPlay={true}
						useBrowserFullscreen={false}
						showPlayButton={false}
						showThumbnails={false}
					/>
				</div>
				<div className="w-full flex flex-wrap">
					{project.techs.map((tech, id) => (
						<p
							key={id}
							className="border-2 border-zinc-300 rounded p-1 my-3 mr-3 w-fit"
						>
							{tech}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
