import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Jou</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />

        <IonGrid>
          <IonRow className="ion-justify-content-center ion-padding-top">
            <IonCol size="12" size-md="6" className="ion-text-center">
              <IonButton expand="block" routerLink="/login">Login</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-padding-top">
            <IonCol size="12" size-md="6" className="ion-text-center">
              <IonButton color="secondary" expand="block" routerLink="/register">Register</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
