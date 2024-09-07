import { useCard } from '@/hooks/Card';
import { useRef } from 'react';
import magnifier from '@/assets/magnifier.svg'
import Select from 'react-select';
import Image from "next/image";
import './FilterSection.css'
import { Constants } from '@/Utils/Constants';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

export function FilterSection() {

    const { isGridView, setIsGridView, filterCards } = useCard();
    const optionsTag = [
        { instanceId: '1', value: 'Tag 1', label: 'Tag 1' },
        { instanceId: '2', value: 'Tag 2', label: 'Tag 2' },
        { instanceId: '3', value: 'Tag 3', label: 'Tag 3' }
    ]

    const searchInput = useRef<HTMLInputElement>(null)

    function handleSearchAction() {
        filterCards(searchInput.current?.value ?? '')
    }

    return (
        <div className="filters-section">
            <div className="search-div">
                <input
                    className="search-input"
                    placeholder="Pesquise por um card ou conteúdo"
                    onKeyDown={(e) => e.key == 'Enter' ? handleSearchAction() : null}
                    ref={searchInput}
                >
                </input>
                <Image
                    src={magnifier}
                    alt="Magnifier icon"
                    className="search-icon"
                    onClick={handleSearchAction}
                ></Image>
            </div>
            <div className="filters-div">
                <Select
                    placeholder="Última modificação"
                    className="custom-select custom-select-lastmod"
                    classNamePrefix="react-select"
                    options={optionsTag}
                    theme={Constants.HeaderSelectTheme}>
                </Select>
                <Select
                    placeholder="Todo período"
                    className="custom-select custom-select-period"
                    classNamePrefix="react-select"
                    options={optionsTag}
                    theme={Constants.HeaderSelectTheme}>
                </Select>
                <Select
                    placeholder="Tag"
                    className="custom-select custom-select-tag"
                    classNamePrefix="react-select"
                    options={optionsTag}
                    theme={Constants.HeaderSelectTheme}>
                </Select>
                <button className={`${!isGridView ? 'active-view' : ''} list-view`} onClick={() => setIsGridView(false)}><ListBulletIcon /></button>
                <button className={`${isGridView ? 'active-view' : ''} block-view`} onClick={() => setIsGridView(true)}><Squares2X2Icon /> </button>
            </div>
        </div>
    )
}