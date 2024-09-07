import Image from "next/image";
import { useCard } from "@/hooks/Card";
import { useRef } from "react";
import magnifier from "@/assets/magnifier.svg"
import filters from "@/assets/filters.svg"
import { ListBulletIcon } from "@heroicons/react/16/solid";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import './FilterSection.css'

export function FilterSection() {

    const { isGridView, setIsGridView, filterCards } = useCard();

    const searchInput = useRef<HTMLInputElement>(null)

    function handleSearchAction() {
        filterCards(searchInput.current?.value ?? '')
    }
    
    return (
        <div className="mobile-filters-component">
            <div className="mobile-filters-section">
                <div className="mobile-search-div">
                    <input
                        className="mobile-search-input"
                        placeholder="Pesquise por um card ou conteúdo"
                        onKeyDown={(e) => e.key == 'Enter' ? handleSearchAction() : null}
                        ref={searchInput}
                    >
                    </input>
                    <Image src={magnifier}
                        alt="Magnifier icon"
                        className="mobile-search-icon"
                        onClick={handleSearchAction}
                    />
                </div>
                <div className="mobile-filters-div">
                    <button className={`${!isGridView ? 'mobile-active-view' : ''} list-view`} onClick={() => setIsGridView(false)}>
                    <Image src={filters}
                        alt="Filters icon"
                        className="mobile-filters-icon"
                        onClick={handleSearchAction}
                    />
                    </button>
                </div>
            </div>
            <div className="mobile-listview-section">
                <button className={`${!isGridView ? 'mobile-active-view' : ''} mobile-list-view`} onClick={() => setIsGridView(false)}><ListBulletIcon /></button>
                <button className={`${isGridView ? 'mobile-active-view' : ''} mobile-block-view`} onClick={() => setIsGridView(true)}><Squares2X2Icon /> </button>
            </div>
        </div>
    )
}