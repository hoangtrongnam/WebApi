import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class ReceiverService {
    constructor(
        private http: HttpClient
        ) {
    }
    searchInfor(request) {
        return this.http.post<any>(`${environment.apiUrl}/receiver/get`, request).toPromise();
    }

    insertInforReceiver(request) {
        return this.http.post<any>(`${environment.apiUrl}/receiver/insert`, request).toPromise();
    }
    
    checkInforUser(id){
        return this.http.get<any>(`${environment.apiUrl}/receiver/get_info_user_hr?userId=` + id).toPromise();
    }
    
    updateInforReceiver(request) {
        return this.http.post<any>(`${environment.apiUrl}/receiver/update`, request).toPromise();
    }
    
    getBranch(request) {
        return this.http.post<any>(`${environment.apiUrl}/branch/get_branch`, request).toPromise();
    }
}