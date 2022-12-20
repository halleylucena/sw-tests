import { IonButton, IonContent, IonIcon, IonPopover } from "@ionic/react"
import { settingsSharp } from "ionicons/icons"
import './PopOverMenu.css'

interface props {
    children: JSX.Element[] | JSX.Element
    styles?: any
}

const PopOverMenu: React.FC<props> = ({ children, styles = { undefined } }) => {
    return (
        <>
            <IonButton id="click-trigger">
                <IonIcon slot="icon-only" icon={settingsSharp}></IonIcon>
            </IonButton>
            <IonPopover trigger="click-trigger" triggerAction="click" size="auto">
                <IonContent>
                    {children}
                </IonContent>
            </IonPopover>
        </>
    )
}

export default PopOverMenu
