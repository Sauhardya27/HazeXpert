import { icon1, icon2, icon3, one, two, three, arrow } from "../assets";

export const navLinks = [
	{
	  id: "home",
	  title: "Home",
	},
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "support",
	  title: "Support",
	},
	{
	  id: "faq",
	  title: "FAQ",
	},
];

export const steps = [
	{
	  id: "step-1",
	  icon: icon1,
	  number: one,
	  next: arrow,
	  title: "Upload Hazy/ Smoky File",
	  content:
		'To submit smoky vedios or photographs, click the "Dehaze" option or browse from your files. HezeXpert will remove the smoke and haze from the file',
	},
	{
	  id: "step-2",
	  icon: icon2,
	  number: two,
	  next: arrow,
	  title: "Dehaze/Desmoke",
	  content:
		"Without any manual work, HazeXpert Software will automatically Dehaze/Desmoke any uploaded video or image using AI.",
	},
	{
	  id: "step-3",
	  icon: icon3,
	  number: three,
	  next: arrow,
	  title: "Download File",
	  content:
		"After being dehaze/desmoke, you may download the appropriate image or vedio to your local device using HazeXpert.",
	},
  ];