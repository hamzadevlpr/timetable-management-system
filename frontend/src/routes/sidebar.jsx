import { GraduationCap, LayoutGrid, CalendarClock, Book, ClipboardEdit } from 'lucide-react';

import Dashboard from '../Pages/Dashboard/Dashboard'
import Courses from '../Pages/Courses/Courses'
import Faculty from '../Pages/Faculty/Faculty'
import Rooms from '../Pages/Rooms/Rooms'
import TimeSlots from '../Pages/Timeslots'

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    name: "Dashboard",
    icon: <LayoutGrid size={23} />
  },
  {
    path: '/courses',
    component: Courses,
    name: "Courses",
    icon: <Book size={23} />
  },
  {
    path: '/faculty',
    component: Faculty,
    name: "Faculty",
    icon: <GraduationCap size={23} />
  },
  {
    path: '/rooms',
    component: Rooms,
    name: "Rooms",
    icon: <ClipboardEdit size={23} />
  },
  {
    path: '/timeslots',
    component: TimeSlots,
    name: "TimeSlots",
    icon: <CalendarClock size={23} />
  },
]

export default routes
