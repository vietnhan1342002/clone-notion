import { Link } from 'react-router'
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import React from 'react'
const socials = [
  { link: 'https://instagram.com', icon: <FaInstagram /> },
  { link: 'https://x.com', icon: <FaXTwitter /> },
  { link: 'https://linkedin.com', icon: <FaLinkedinIn /> },
  { link: 'https://facebook.com', icon: <FaFacebook /> },
  { link: 'https://youtube.com', icon: <FaYoutube /> },
]

const companys = [
  { title: 'About us', link: '/about' },
  { title: 'Careers', link: '/career' },
  { title: 'Security', link: '/security' },
  { title: 'Status', link: '/status' },
  { title: 'Terms & privacy', link: '/term' },
  { title: 'Your privacy rights', link: '/privacy' },
]

const downloads = [
  { title: 'iOS & Android', link: '/mobile' },
  { title: 'Mac & Windows', link: '/desktop' },
  { title: 'Calendar', link: '/calendar' },
  { title: 'Web Clipper', link: '/web-clipper' },
]
const resources = [
  { title: 'Help center', link: '/help-center' },
  { title: 'Pricing', link: '/pricing' },
  { title: 'Blog', link: '/blog' },
  { title: 'Community', link: '/community' },
  { title: 'Integrations', link: '/integrations' },
  { title: 'Templates', link: '/templates' },
  { title: 'Partner programs', link: '/partner-programs' },
]

const notionFor = [
  { title: 'Enterprise', link: '/enterprise' },
  { title: 'Small business', link: '/small-business' },
  { title: 'Personal', link: '/personal' },
]

const Footer = () => {
  return (
    <nav className="py-10 flex gap-5 justify-around px-36 text-sm">
      <div className="flex flex-col gap-2">
        <Link to={'/'}>Notion-Clone</Link>
        <div className="flex gap-2 py-2">
          {socials.map((social) => (
            <a
              key={social.link}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded hover:bg-gray-100 transition-colors p-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <span className="text-sm">© 2025 Notion Clone Labs, Inc</span>
      </div>
      <LinkColumn title="Company" items={companys} />
      <LinkColumn title="Downloads" items={downloads} />
      <LinkColumn title="Resources" items={resources} />
      <div className="flex flex-col justify-between">
        <LinkColumn title="Notion For" items={notionFor} />
        <Link
          to={'/explore-more'}
          className="flex items-center gap-1 font-bold hover:underline hover:text-blue-400 decoration-blue-400"
        >
          Explore more
          <FaArrowRight />
        </Link>
      </div>
    </nav>
  )
}

interface LinkItem {
  title: string
  link: string
}

interface LinkColumnProps {
  title: string
  items: LinkItem[]
}

const LinkColumn = React.memo(({ title, items }: LinkColumnProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold">{title}</h2>
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          className="hover:underline decoration-blue-400"
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
})

export default Footer
