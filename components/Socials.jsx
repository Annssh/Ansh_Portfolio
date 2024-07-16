import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Annssh", target: "_blank" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ansh-agrawal-396116251/",
    target: "_blank",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/_agrawal_ansh.18?igsh=cXJ0cXZ4ajI5eHhp",
    target: "_blank",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/917024546438",
    target: "_blank",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target={item.target}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
