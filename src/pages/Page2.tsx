import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useHistory } from 'react-router';
import { toast } from '../toast';

const Page2: React.FC = () => {
    const history = useHistory();
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            await toast('Logged out successfully');
            history.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
            toast('Failed to logout');
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page 2</IonTitle>
                    <IonButtons slot="start">
                        <IonButton routerLink="/home">Back to Home</IonButton>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton onClick={handleLogout}>Logout</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Protected Page 2</h2>
                <p>This is another protected page that only authenticated users can see.</p>
            </IonContent>
        </IonPage>
    );
};

export default Page2;