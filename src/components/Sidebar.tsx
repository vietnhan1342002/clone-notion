import { Link } from 'react-router'
import PrivateSection from './PrivateSection'
import { Button } from './ui/button'
import { FiCalendar, FiFolder, FiHelpCircle, FiHome, FiSettings, FiShield, FiUser, } from "react-icons/fi";
import { CiCircleQuestion } from "react-icons/ci";
import { GiPresent } from "react-icons/gi";

const dashs = [
  { label: 'Dashboard', icon: <FiHome/> },
  { label: 'Projects',icon: <FiFolder/> },
  { label: 'Teams',icon: <FiUser/> },
  { label: 'Calendar',icon: <FiCalendar/> },
]

const footer = [
  { label: 'Settings',icon: <FiSettings /> },
  { label: 'Help & Support', icon:<FiHelpCircle/>},
  { label: 'Privacy & Terms',icon: <FiShield/> },
]
const SideBar = () => {
  return (
    <div className="h-screen w-2/12 flex flex-col bg-gray-100 gap-3 pl-2">
      {/* Phần 1 */}
      <div className="flex flex-col gap-1">
        {dashs.map((dash, index) => (
          <Link key={index} to={`/${dash.label.toLowerCase()}`}>
            <Button
              variant="ghost"
              className="w-full justify-start px-2 text-xs text-gray-500 hover:bg-gray-200"
            >
              {dash.icon}
              {dash.label}
            </Button>
          </Link>
        ))}
      </div>

      {/* Phần 2 */}
      <div className="w-full overflow-auto" aria-label="Private">
        <PrivateSection />
      </div>

      {/* Phần 3 */}
      <div className="">
        {footer.map((foot, index) => (
          <Link key={index} to={`/${foot.label.toLowerCase()}`}>
            <Button
              variant="ghost"
              className="w-full justify-start px-2 text-xs text-gray-500 hover:bg-gray-200"
            >
              {foot.icon}{foot.label}
            </Button>
          </Link>
        ))}
      </div>

      <footer className='flex gap-2 mt-auto mb-2'>
        <CiCircleQuestion/>
        <GiPresent />
      </footer>
    </div>
  )
}

export default SideBar
