import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

import whyus from "../assets/images/whyus.webp";
import FilmTransfer from "../assets/images/FilmTransfer.webp";
import PhotoScanning from "../assets/images/PhotoScanning.webp";
import HomeVideoMedia from "../assets/images/HomeVideoMedia.webp";
import HighestQuality from "../assets/images/HighestQuality.webp";
import PhotoScanning02 from "../assets/images/PhotoScanning02.jpg";
import EncodingServices from "../assets/images/EncodingServices.webp";
import AudioTapeCapture from "../assets/images/AudioTapeCapture.webp";
import VideoTapeCaptureImg from "../assets/images/VideoTapeCapture.webp";
import RestorationServices from "../assets/images/RestorationServices.jpg";

export default function LargeScaleMediaMigration() {
	const [title, setTitle] = useState(
		"LargeScaleMediaMigration - The BroadCast Store",
	);
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);
	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
	}, [title, description]);

	useEffect(() => {
		AOS.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="innerban">
				<div className="bannerText">
					<h1
						className="heading"
						data-aos="fade-up">
						Large-Scale Media Migration
					</h1>
				</div>
				<p className="breadcum">Multimedia Services</p>
			</div>
			<div id="abt-text-about">
				<div className="headcontent">
					<div className="innerContent">
						<h3 className="sec-head">Video Tape Capture</h3>
						<p className="para">Standards: PAL, NTSC, HD, 4K</p>
						<p className="para">
							Formats: D1, D2, D3, D5, Digital Betacam, Betacam SP, Betamax
							HDcam, HDcamSR, DVcam, miniDV, HDVcam, DVCpro, 1” Open Reel, 3⁄4”
							Umatic, Betamax, Super Betamax, 8mm, Super 8, Hi8, VHS, S-VHS,
							C-VHS
						</p>
						<p className="para">
							Service: We capture to uncompressed video file formats (MOV, AVI)
							and then transcode/process video to the desired outputformat. If
							there are problems with your Master (due to age or storage),The
							Broadcast store will evaluate the issue, give a recommendation,
							and provide a solution to capture your content. The Broadcast
							store maintains all our equipment to manufacture specifications
							and we carry the top equipment brands available to provide the
							best video quality possible.
						</p>
					</div>
					<div className="image">
						<img
							src={VideoTapeCaptureImg}
							alt=""
							className="about-img"
						/>
					</div>
				</div>
			</div>
			<div id="abt-text-system">
				<div className="image">
					<img
						src={AudioTapeCapture}
						alt=""
					/>
				</div>
				<div className="innerContent">
					<h3 className="sec-head">Audio Tape Capture: Up to 192khz</h3>
					<p className="para">
						Formats: : DAT, DA88, ADAT, Cassette, Nagra, 1⁄4”, 1⁄2” and 2” (24
						Track) Open Reels, LP Records
					</p>
					<p className="para">
						Service: We capture to uncompressed audio file formats (WAV, FLAC)
						and transcode/process audio to the desired output format. Let us
						help get your audio tapes converted to a digital format that you’ll
						be able to enjoy for a lifetime. We can transfer nearly all audio
						tape formats.
					</p>
				</div>
			</div>
			<div className="abt-flexdiv abt-flexdiv-lsmm">
				<div className="row-1">
					<div className="col-1">
						<h2 className="sec-head">Restoration Services:</h2>
						<p className="para">
							As an all-around video tape service company, the broadcast store
							provides an array of technical know-how, with a wide range of
							techniques and equipment, to overcome tape master aging, damaged
							tape elements, and poor storage issues. Here are some of the
							problems we encounter. Shedding, stiction, tracking, tape guides,
							tape pack, tape creases, weak rf, improper noise reduction, low
							audio levels. The broadcast store utilizes 30 years of experience
							and several techniques such as, tape baking, rti evaluator /
							cleaner / scraper, rebuilding cassette shells
							(lubricating/replacing parts & guides, cleaning debris).
						</p>
						<p className="para">
							Hand cleaning tapes, and repacking tapes by hand. Also, if
							necessary, we will load a tape into a surrogate shell and capture
							it in sections then edit it into a complete file ready for viewing
							or mastering work.
						</p>
					</div>
					<div className="col-2">
						<img
							src={RestorationServices}
							alt="mediaImg"
						/>
					</div>
				</div>
				<div className="row-2">
					<div className="col-1">
						<div>
							<h3 className="sec-head">Encoding Services</h3>
							<p className="para">
								We have full-service encoding/transcoding capabilities and
								support a vast array of formats, codecs and file containers.
								These include mpeg-ts, prores, hevc/h.265, avc/h.264, vp9, mxf,
								avc-intra/long-gop, jpeg2000, omneon, webm, mov, dnxhd, xdcam
								and many more. We can handle your dolby vision, hdr10, hdr10+
								and hlg projects. We also support all frame rates, frame sizes
								and bitrates, as well as interlaced content.
							</p>
						</div>
					</div>
					<div className="col-2">
						<img
							src={EncodingServices}
							alt="packagesImg"
						/>
					</div>
				</div>
			</div>
			<div className="abt-flexdiv abt-flexdiv-lsmm">
				<div className="row-1">
					<div className="col-1">
						<h2 className="sec-head">Other Services:</h2>
						<p className="para">
							<ul>
								<li>Up-resing/Cross-converting: PAL to NTSC & NTSC to HD/4K</li>
								<li>LTO Data Archive and Retrieval</li>
								<li>Iconik Platform Onboarding and Management</li>
								<li>Transcription Services</li>
								<li>Closed Caption file creation</li>
								<li>Metadata Services</li>
								<li>AWS Archiving</li>
								<li>Photo Scanning</li>
								<li>VOD Platform Onboarding: Amazon, Hulu, Tubi, etc.</li>
							</ul>
						</p>
					</div>
					<div className="col-2">
						<img
							src={PhotoScanning}
							alt="mediaImg"
						/>
					</div>
				</div>
				<div className="row-2">
					<div className="col-1">
						<div>
							<h3 className="sec-head">Film Transfer</h3>
							<p className="para">
								Your super 8, 8mm film is your history and must be preserved.
								The broadcast store can take all your reels of unseen print
								film, and safely make high-definition digital video files of
								your memories. We hand-clean all film and enhance the video
								quality to revitalize the film images and bring them back to
								life.
							</p>
						</div>
					</div>
					<div className="col-2">
						<img
							src={FilmTransfer}
							alt="packagesImg"
						/>
					</div>
				</div>
			</div>
			<div className="abt-flexdiv abt-flexdiv-lsmm">
				<div className="row-1">
					<div className="col-1">
						<h2 className="sec-head">Photo Scanning</h2>
						<p className="para">
							Capture your photos and photo albums into high-quality digital
							files that can be kept forever and shared with family and friends.
							All photo scanning is completed by hand on the highest quality
							scanners that will deliver quality digital files.
						</p>
					</div>
					<div className="col-2">
						<img
							src={PhotoScanning02}
							alt="mediaImg"
						/>
					</div>
				</div>
				<div className="row-2">
					<div className="col-1">
						<div>
							<h3 className="sec-head">Home Video Media</h3>
							<p className="para">
								Transfer your old videos on tape to digital formats, we will
								transfer your videos onto drives or discs, where they will be
								permanently archived. We convert all types of video tape formats
								to digital files where you can store and preserve them for the
								future.
							</p>
							<p className="para">
								Our video transfer service is also affordable so that you can
								preserve your memories at a reasonable cost.
							</p>
						</div>
					</div>
					<div className="col-2">
						<img
							src={HomeVideoMedia}
							alt="packagesImg"
						/>
					</div>
				</div>
			</div>
			<div className="abt-flexdiv abt-flexdiv-lsmm">
				<div className="row-1">
					<div className="col-1">
						<h2 className="sec-head">Highest Quality</h2>
						<p className="para">
							Our technicians provide a high level of service with attention to
							detail. We capture all tapes in uncompressed file format and work
							down from there.....not just the standard MP4 compressed files you
							find at the Home Video websites. Our technicians take personal
							care of your media, and if something goes wrong, we will get it
							diagnosed and fixed, our years of experience give us the technical
							know-how to complete your project.
						</p>
					</div>
					<div className="col-2">
						<img
							src={HighestQuality}
							alt="mediaImg"
						/>
					</div>
				</div>
				<div className="row-2">
					<div className="col-1">
						<div>
							<h3 className="sec-head">Why The Broadcast store?</h3>
							<p className="para">
								Our technical staff and upper management have 30-plus years in
								the Post Production industry. We pride ourselves on the quality
								of work we do and we strive to exceed our client's expectations.
								Our custome rs enjoy doing business with us because of our
								friendly, professional and knowledgeable technicians.
							</p>
						</div>
					</div>
					<div className="col-2">
						<img
							src={whyus}
							alt="packagesImg"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
