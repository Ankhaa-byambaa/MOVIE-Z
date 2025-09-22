import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

export function Header (){
    return <>
    <div>
        <img className="h-5" src='Logo.png'/>
        <div>
            <DropdownMenu/>
        </div>
        <div></div>

        
    </div>
    </>
}