import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const SocialIcon = ({ href, icon: IconComponent }) => (
  <li className="border border-gray-500 p-2 rounded-full">
    <a href={href} target="_blank">
      <IconComponent />
    </a>
  </li>
);

const SocialIcons = () => (
  <ul className="mx-auto flex flex-rows gap-4 flex-wrap justify-center text-3xl">
    <SocialIcon href="https://github.com/dmolin" icon={FaGithub} />
    <SocialIcon
      href="https://www.linkedin.com/in/davidemolin"
      icon={FaLinkedinIn}
    />
  </ul>
);

export default SocialIcons;
