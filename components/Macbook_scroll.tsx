import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function Macbook_Scroll() {
    return (
        <div className="w-full overflow-hidden bg-[#313030]">
            <MacbookScroll
                title={
                    <span>
                        Welcome to the world of Apaarmeet .
                    </span>
                }
                src={"./me.jpg"}
               
                
                showGradient={false}
            />
        </div>
    )
}