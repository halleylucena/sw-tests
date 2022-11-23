import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
// import React, { lazy } from "react"

// const DocumentsList = lazy(() => import("remote/Documents"))

const Documents: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
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
                {/* <React.Suspense>
                    <DocumentsList />
                </React.Suspense> */}
            </IonContent>
        </IonPage>
    )
}

export default Documents
