import { Dock, DockIcon } from "./dock.jsx";
import {
    HouseIcon,
    PencilIcon,
    Github,
    Instagram,
    Twitter,
    Mail
} from "lucide-react";

const Icons = {
    HouseIcon: props => <HouseIcon {...props} />,
    PencilIcon: props => <PencilIcon {...props} />,
    Github: props => <Github {...props} />,
    Instagram: props => <Instagram {...props} />,
    Twitter: props => <Twitter {...props} />,
    Mail: props => <Mail {...props} />
};

const DATA = {
    navbar: [
        { href: "/", icon: Icons.HouseIcon, label: "Home" },
        { href: "/blog", icon: Icons.PencilIcon, label: "Blog" }
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Raffyshira",
                icon: Icons.Github
            },
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/raffyshira?igsh=MXhja28zbTZ1MHFyOQ==",
                icon: Icons.Instagram
            },
            X: {
                name: "X",
                url: "https://x.com/raffyshira",
                icon: Icons.Twitter
            },
            email: {
                name: "Send Email",
                url: "rafiahsiraprayoga@gmail.com",
                icon: Icons.Mail
            }
        }
    }
};

export default function BottomNav({ children }) {
    return (
        <Dock direction="middle">
            {DATA.navbar.map((item, index) => (
                <DockIcon key={index}>
                    <a aria-label={item.label} href={item.href}>
                        <item.icon className="w-4 h-4" />
                    </a>
                </DockIcon>
            ))}
            <hr className="w-[1px] h-5 bg-gray-500" />
            {Object.entries(DATA.contact.social).map(([key, value], index) => (
                <DockIcon key={index}>
                    <a aria-label={value.name} target="_blank" href={value.url}>
                        <value.icon className="w-4 h-4" />
                    </a>
                </DockIcon>
            ))}
            <hr className="w-[1px] h-5 bg-gray-500" />
            <DockIcon>{children}</DockIcon>
        </Dock>
    );
}
