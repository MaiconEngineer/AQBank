import Lead from '../assets/svg/lead-icon.svg'
import Calendar from '../assets/svg/Calendar-icon.svg'
import TrophyLine from '../assets/svg/trophy-line.svg'
import ArrowRightLine from '../assets/svg/arrow-right-s-line.svg'
import ArrowLeftLine from '../assets/svg/arrow-left-s-line.svg'

export const icons = {
    lead: Lead,
    calendar: Calendar,
    trophyline: TrophyLine,
    arrowRightLine: ArrowRightLine,
    arrowLeftLine: ArrowLeftLine
}

export function Icon(name: string): React.FC<SvgProps> {
    if (name in icons) {
        return icons[name as keyof typeof icons];
    }
    throw new Error("Icon file not found.");
}
