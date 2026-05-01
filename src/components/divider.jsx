import EcoSmartLogo from '../assets/images/ecoSmart.svg'

export default function Divider() {
    return (
        <div className="flex items-center w-full px-10 bg-white">
            <div className="flex items-center gap-3 pr-4 ">
                    <img src={EcoSmartLogo} alt="logo" className="h-10 w-10" />
            </div>

            <div className="flex-1 h-px bg-gradient-to-r from-green-50 to-green-800"></div>
        </div>
    );
}