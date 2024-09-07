'use client'

import { useCard } from '@/hooks/Card';
import { ICreateCard } from '@/interfaces/ICard';
import { useEffect, useRef, useState } from 'react';
import './CreateCard.css'
import { ChevronDownIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function CreateCardPage() {
    const { saveNewCard } = useCard()

    const [isGeneralDataExpanded, setIsGeneralDataExpanded] = useState(true)
    const [isContentExpanded, setIsContentExpanded] = useState(true)
    const [canSave, setCanSave] = useState(false)

    const [contentData, setContentData] = useState<{ [key: number]: string }>({ 0: '' })

    const cardTitleInput = useRef<HTMLInputElement>(null)
    const cardDescriptionInput = useRef<HTMLInputElement>(null)

    function saveCard() {
        console.log({ canSave });
        if (!canSave) return;

        const _newCard: ICreateCard = {
            title: cardTitleInput.current!.value,
            description: cardDescriptionInput.current!.value,
            content: Object.values(contentData).map(title => ({ title, isNew: true })) ?? []
        }

        console.log({ _newCard });


        saveNewCard(_newCard)
    }

    function handleContentTitleChange(index: number, newValue: string): void {
        const newContentData = { ...contentData, [index]: newValue }
        setContentData(newContentData)
    }

    function handleContentTitleRemove(idx: number): void {
        const { [idx]: removedItem, ...newContentData } = contentData

        setContentData(newContentData)
    }

    function addContentTitleRow() {
        const lastIndex = Number(Object.keys(contentData).sort((a, b) => a < b ? 1 : -1)[0])

        setContentData({
            ...contentData,
            [lastIndex + 1]: ''
        })
    }

    return (
        <section className='create-card-section'>
            <h1 className='create-button-section'>
                Criar Card
                <button onClick={saveCard} disabled={!canSave}>Salvar</button>
            </h1>

            <div className='tab-group' onClick={() => setIsGeneralDataExpanded(!isGeneralDataExpanded)}>
                <h4>Dados Gerais</h4>
                <ChevronDownIcon className={`${isGeneralDataExpanded ? 'expanded' : ''}`} />
            </div>

            <section className='general-data-group'>
                {
                    isGeneralDataExpanded
                        ?
                        <>
                            <div className='row'>
                                <div className='input-div'>
                                    <span className='label'>Titulo</span>
                                    <input type="text"
                                        placeholder='Insira um Titulo'
                                        onChange={() => setCanSave(cardTitleInput.current?.value !== '' && cardDescriptionInput.current?.value !== '')}
                                        ref={cardTitleInput}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-div'>
                                    <span className='label'>Descrição</span>
                                    <input type="text"
                                        placeholder='Insira uma Descrição'
                                        onChange={() => setCanSave(cardTitleInput.current?.value !== '' && cardDescriptionInput.current?.value !== '')}
                                        ref={cardDescriptionInput}
                                    />
                                </div>
                            </div>
                        </>
                        : null
                }
            </section>

            <div style={{ position: 'relative' }}>
                <div className='tab-group' onClick={() => setIsContentExpanded(!isContentExpanded)}>
                    <h4>
                        Conteúdo
                    </h4>
                    <ChevronDownIcon className={`${isContentExpanded ? 'expanded-content' : ''}`} />
                </div>
                <PlusIcon className='add-content-row' onClick={addContentTitleRow} />
            </div>

            <section className='content-group'>
                {
                    isContentExpanded
                        ?
                        Object.values(contentData).map((data, index) => (
                            <div className='row' key={index}>
                                <div className='input-div'>
                                    <span className='label'>Titulo</span>
                                    <input type="text" placeholder='Insira um Titulo' onChange={(ev) => handleContentTitleChange(index, ev.target.value)} />
                                </div>
                                <div onClick={() => handleContentTitleRemove(index)}>
                                    <XMarkIcon className='remove-content' />
                                </div>
                            </div>
                        ))
                        : null
                }
            </section>
        </section >
    );
}