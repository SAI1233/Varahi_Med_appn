import { provideRouter, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewRegistrationComponent } from './supervisor_Admin1/new-registration/new-registration.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PatientCheckUniversalComponent } from './supervisor_Admin1/patient-check-universal/patient-check-universal.component';
import { DoctorAvailabilityComponent } from './supervisor_Admin1/doctor-availability/doctor-availability.component';
import { BloodBankComponent } from './supervisor_Admin1/blood-bank/blood-bank.component';
import { BedAvailabilityComponent } from './supervisor_Admin1/bed-availability/bed-availability.component';
import { CaseTransferComponent } from './supervisor_Admin1/case-transfer/case-transfer.component';

export const routes: Routes = [

    { path: 'Home', component: HomePageComponent },
    { path: '', component: LoginpageComponent },
    { path: 'New_Registration', component: NewRegistrationComponent},
    { path: 'Patient_Check_Universal', component: PatientCheckUniversalComponent},
    { path: 'Doctor_Availability_Check', component: DoctorAvailabilityComponent},
    { path: 'Bood_Bank', component: BloodBankComponent},
    { path: 'Bed_Availability', component: BedAvailabilityComponent},
    { path: 'Case_Transfer', component: CaseTransferComponent},







    
];


export const appConfig = {
    providers: [provideRouter(routes)],
  };