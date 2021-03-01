import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class ACQTService {
    constructor(private http: HttpClient) {
    }
    InsertACQT(request) {
        return this.http.post<any>(`${environment.apiUrl}/goiacqt/insertacqt`, request).toPromise();
    }

    UpdateACQT(request) {
        return this.http.post<any>(`${environment.apiUrl}/acqt/updateacqt`, request).toPromise();
    }
    UpdateStatusCheckACQT(request) {
        return this.http.post<any>(`${environment.apiUrl}/acqt/updatestatuscheckacqt`, request).toPromise();
    }
    
    HandleDuplicateACQT(request) {
        return this.http.post<any>(`${environment.apiUrl}/acqt/insert_important_print`, request).toPromise();
    }
    
    DeleteDuplicateACQT(acqt_id,mavach_acqt) {
        return this.http.delete<any>(`${environment.apiUrl}/acqt/delete_important_print?acqt_id=${acqt_id}&mavach_acqt=${mavach_acqt}`).toPromise();
    }
}