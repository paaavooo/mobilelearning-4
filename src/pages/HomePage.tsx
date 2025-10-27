import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useHistory } from 'react-router';
import { toast } from '../toast';

const HomePage: React.FC = () => {
    const history = useHistory();
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast('Logged out successfully');
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
                    <IonTitle>Home</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleLogout}>Logout</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Welcome to Your Dashboard</h2>
                <p>You are now logged in!</p>
                
                {/* Navigation buttons to other protected pages */}
                <IonButton routerLink="/page1" expand="block" className="ion-margin-top">
                    Go to Page 1
                </IonButton>
                <IonButton routerLink="/page2" expand="block" className="ion-margin-top">
                    Go to Page 2
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default HomePage;