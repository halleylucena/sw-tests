import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React, { lazy } from "react"
import { search, filterSharp } from "ionicons/icons"

const DocumentsList = lazy(() => import("remote/Documents"))

const Documents: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonButtons slot="secondary">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={search}></IonIcon>
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={filterSharp}></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Documents</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Documents</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <React.Suspense>
                    <DocumentsList />
                </React.Suspense>
            </IonContent>
        </IonPage>
    )
}

export default Documents
