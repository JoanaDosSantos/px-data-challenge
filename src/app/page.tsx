'use client'

import { LocalStorage } from "@/Utils/Utils";
import { CardsContainer } from "@/components/cardsContainer/CardsContainer";

import "./page.css"
import { Constants } from "@/Utils/Constants";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import { FirstAccessContent } from "@/components/firstAccess/FirstAccess";

export default function Home() {
  const [isFirstAccess, setIsFirstAccess] = useState(new LocalStorage().get<boolean>(Constants.LocalStorageKeys.isFirstAccess))

  function handleCloseModal() {
    new LocalStorage().set<boolean>({ key: Constants.LocalStorageKeys.isFirstAccess, data: false })
    setIsFirstAccess(false)
  }

  return (
    <>
      {
        isFirstAccess
          ? <Modal onClose={handleCloseModal}>
            <FirstAccessContent closeModal={handleCloseModal}/>
          </Modal>
          : null
      }

      <main className="mainContent">
        <CardsContainer />
      </main>
    </>
  );
}
