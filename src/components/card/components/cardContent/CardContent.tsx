import Image from "next/image"
import chainIcon from "@/assets/anex.svg"
import newIcon from "@/assets/newanex.svg"
import { ICardContent } from "@/interfaces/ICard"

import './CardContent.css'

interface IProps {
    contentData: ICardContent
    isLastItem: boolean
}
export function CardContent({ contentData, isLastItem }: IProps) {
    return (
        <>
            <div className="row">
                <div className="row-details">
                    <Image src={chainIcon} alt="Link" />
                    <span>{contentData.title}</span>
                </div>

                {
                    contentData.isNew
                        ? <Image src={newIcon} alt="New" className="new-content" />
                        : null
                }
            </div>

            {!isLastItem ? <span className="spreadline"></span> : null}
        </>
    );
}